const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'region'
        this.cooldown = 5
        this.description = 'Elige una región como destino.'
        this.uses = [
            ['Regiones disponibles', ''],
            ['Elegir una región', '<region>'],
        ]
        this.options = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Teselia', 'Kalos', 'Alola', 'Galar']

        this.exec = async (message, args, server) => {
            const embed = { color: '#16A167' }
            const prefix = await server.getPrefix()

            if(!args[0]) {
                embed.author = 'Regiones disponibles'
                embed.description = this.options.join(", ") + '.'
                embed.footer = `Para elegir una región usa el comando ` + prefix + this.nombre + ' <region>'
            } else {
                const data = await this.db.trainer.findOne({ where: { user: message.author.id } })

                if(!data) return message.reply('aún no registrado como entrenador pokémon.')
                if(data.region) return message.reply(`ya perteneces a la región ${data.region}.`)
                if(!this.options.includes(this.capitalize(args[0]))) return message.channel.send('❌ Esta región no existe.')
                
                await this.db.trainer.update({ region: this.capitalize(args[0]) }, { where: { id: data.id } })

                embed.author = '🛫 Viajando a ' + this.capitalize(args[0])
                embed.description = 'Atrapa todos los pokémon que puedas y no te olvides de conseguir todas las medallas de tu región. ¡Buena suerte!'
                embed.footer = 'Si necesitas ayuda puedes usar el comando ' + prefix + 'tutorial'
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command