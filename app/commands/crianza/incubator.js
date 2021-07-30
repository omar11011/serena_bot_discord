const Base = require('../../../util/class/Command')

const antiquity = require('../../../util/functions/antiquity')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'incubator'
        this.alias = ['incubadora']
        this.description = 'Obtén datos de tu incubadora.'
        this.uses = [
            ['Ver información de mi incubadora', ''],
        ]

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            const user = await this.db.trainer.findOne({ where: { user: message.author.id }, attributes: ['breed', 'date'] })
            if(!user) return message.reply('no estás registrado como entrenador pokémon.')

            const breed = new this.breed(message.guild.id, message.author.id)
            const eggs = await breed.dataEgg()
            const embed = {
                author: [message.author.tag, message.author.avatarURL()],
                description: 'Para subir el nivel de tu incubadora puedes usar el comando `' + prefix + 'upgrade breed`.',
                fields: [
                    { name: 'Incubadora', value: 'Nivel ' + user.breed, inline: true },
                    { name: 'Huevos', value: eggs.length  + '/' + user.breed, inline: true },
                    { name: 'Antigüedad', value: antiquity('days', user.date) + ' días', inline: true },
                ],
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command