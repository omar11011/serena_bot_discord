const Base = require('../../../util/class/Command')
const timeWait = require('../../../util/functions/timeWait')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'egg'
        this.alias = ['eggs', 'huevo', 'huevos']
        this.description = 'Obtén información de los huevos que tienes en la incubadora.'
        this.uses = [
            ['Revisar los huevos de mi incubadora', ''],
        ]

        this.exec = async (message, args, server) => {
            const breed = new this.breed(message.guild.id, message.author.id)
            const eggs = await breed.dataEgg()

            if(eggs.length == 0) return message.reply('no tienes ningún huevo en tu incubadora.')

            const embed = {
                author: ['Incubadora', message.author.avatarURL()],
                description: 'Actualmente tienes ' + eggs.length + ' huevo' + (eggs.length != 1 ? 's' : '') + ' incubando. Si alguno ya puede eclosionar usa el comando `' + await server.getPrefix() + 'hatch`.',
                fields: [],
                footer: 'Usuario: ' + message.author.tag,
            }

            for(let i = 0; i < eggs.length; i ++) {
                const open = { can: false, time: Date.now() }
                if(open.time >= eggs[i].time) open.can = true
                embed.fields.push({ name: eggs[i].pokemon, value: open.can ? '☑️ Listo para eclosionar' : '⌛ ' + timeWait(Math.round((eggs[i].time - open.time) / 1000)) })
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command