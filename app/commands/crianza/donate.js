const Base = require('../../../util/class/Command')

const timeBreed = require('../../../util/functions/timeBreed')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'donate'
        this.alias = ['donar']
        this.description = 'Dona gemas al servidor en el que estás para poder habilitar la crianza por 6h.'
        this.uses = [
            ['Información de la crianza en el servidor', ''],
            ['Donar para abrir el centro de crianza por 6 horas', '<gemas>'],
        ]

        this.exec = async (message, args, server) => {
            const embed = {  }
            const breed = new this.breed(message.guild.id, message.author.id)
            const data = await breed.dataServer()
            const time = timeBreed(breed, data)
            
            if(!args[0]) {
                embed.author = 'Crianza Pokémon'
                embed.description = 'Total de donaciones en el servidor: ' + (data.gems ? data.gems : 0) + '/300'
                embed.fields = [ { name: 'Servidor verificado', value: data.verify ? 'Sí' : 'No', inline: true } ]

                if(data.verify) {
                    embed.fields.push({ name: 'Abierto', value: time.open ? 'Sí' : 'No', inline: true })
                    if(time.open) embed.fields.push({ name: 'Cierre', value: time.time, inline: true })
                }
            } else {
                if(isNaN(args[0]) || parseInt(args[0]) < 1) return message.react('❓')

                const amount = parseInt(args[0])
                const balance = await this.db.balance.findOne({ attributes: ['id', 'gems'], include: [ { model: this.db.trainer, as: 'trainer', attributes: [], where: { user: message.author.id } } ] })
                if(!balance) return message.reply('no estás registrado como entrenador pokémon.')
                if(balance.gems < amount) return message.reply('no tienes suficientes gemas.')

                await this.db.balance.increment({ gems: -amount }, { where: { id: balance.id } })

                embed.color = '#16A167'
                embed.author = [message.author.tag, message.author.avatarURL()]
                embed.description = 'Acabas de donarle ' + amount + ' gemas al servidor ' + message.guild.name + '.'

                if(!data.gems) data.gems = 0
                data.gems += amount

                if(data.gems >= 300) {
                    data.gems -= 300
                    if(data.gems == 0) delete data.gems

                    if(data.time == 0) data.time = Date.now()
                    data.time += (21600 * 1000)
                } else embed.footer = 'Aún faltan ' + (300 - data.gems) + ' gemas para que el servidor obtenga acceso al criadero por 6 horas.'

                breed.folderServer.establecer(breed.server, data)
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command