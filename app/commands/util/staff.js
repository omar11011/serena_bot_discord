const Base = require('../../../util/class/Command')

const { Op } = require('sequelize')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'staff'
        this.alias = ['equipo']
        this.cooldown = 5
        this.description = 'Muestra a los integrantes del equipo de ' + this.client.config.bot.name
        this.uses = [
            ['Ver lista del equipo de ' + this.client.config.bot.name, ''],
        ]

        this.exec = async (message, args, server) => {
            const staff = await this.db.trainer.findAll({ where: { rank: { [Op.ne]: null } }, attributes: ['name', 'rank'] })
            if(staff.length == 0) return message.reply('aún no hay información del equipo.')

            const embed = {
                color: '#16A167',
                author: ['Equipo de ' + this.client.config.bot.name, this.client.user.displayAvatarURL()],
                description: 'Puedes comunicarte con cualquier persona del equipo si ocurre algún fallo con la bot o para responder a tus dudas.',
                fields: [],
                footer: 'Información requerida por: ' + message.author.tag,
            }

            for(let i = this.ranks.length - 1; i > 0; i--) {
                const content = staff.filter(e => {
                    return e.rank == i
                })
                if(content.length > 0) {
                    const users = []
                    for(let j = 0; j < content.length; j++) users.push(content[j].name)
                    embed.fields.push({ name: this.ranks[i], value: users.join("\n"), inline: true })
                }
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command