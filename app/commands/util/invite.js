const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'invite'
        this.alias = ['invitación', 'invitacion']
        this.description = 'Obtén los links de invitación de ' + this.client.config.bot.name + ' y del Servidor Oficial.'
        this.uses = [
            ['Invitaciones', ''],
        ]

        this.exec = async (message, args, server) => {
            const embed = {
                title: '❯ Invitaciones de ' + this.client.config.bot.name,
                fields: [
                    { name: `Soporte`, value: `[Click here](${this.client.config.bot.invite_server})`, inline: true },
                    { name: `Invítame`, value: `[Click here](${this.client.config.bot.invite_serena})`, inline: true }
                ],
                thumbnail: this.client.user.displayAvatarURL(),
                footer: `Pedido por: ${message.author.tag}`,
                timestamp: true,
            }

            return await this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command