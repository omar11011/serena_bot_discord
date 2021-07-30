const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'hatch'
        this.alias = ['eclosionar']
        this.cooldown = 5
        this.description = 'Eclosiona algún huevo que esté listo para nacer.'
        this.uses = [
            ['Eclosionar un huevo', ''],
        ]

        this.exec = async (message, args, server) => {
            let breed = new this.breed(message.guild.id, message.author.id)
            let eggs = await breed.dataEgg()

            if(eggs.length == 0) return message.reply('no tienes ningún huevo en tu incubadora.')

            const hatch = []
            for(let i = 0; i < eggs.length; i++) {
                if(Date.now() >= eggs[i].time) hatch.push(eggs[i])
            }

            if(hatch.length == 0) return message.reply('no tienes ningún huevo listo para eclosionar.')

            const user = await this.db.trainer.findOne({ where: { user: message.author.id }, attributes: ['id'] })
            if(!user) return message.reply('no estás registrado como entrenador pokémon.')

            const embed = {
                author: [message.author.tag, message.author.avatarURL()],
                description: '¡Felicidades! Has eclosionado ' + hatch.length + ' huevo' + (hatch.length != 1 ? 's' : '') + '.',
                fields: [],
                timestamp: true,
            }

            for(let i = 0; i < hatch.length; i++) {
                embed.fields.push({ name: hatch[i].pokemon, value: 'ID Global: ' + hatch[i].id, inline: true })
                eggs = eggs.filter(e => {
                    return e.id != hatch[i].id
                })
                await this.db.pokemon.update({ trainerId: user.id }, { where: { id: hatch[i].id } })
            }

            if(eggs.length == 0) breed.folderEgg.eliminar(message.author.id)
            else breed.folderEgg.establecer(message.author.id, eggs)

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command