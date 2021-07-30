const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'afk'
        this.cooldown = 4
        this.description = 'Responde automáticamente a las menciones de los demás usuarios cuando no quieras que te molesten.'
        this.botPermissions = ['MANAGE_NICKNAMES']
        this.uses = [
            ['Modo AFK', ''],
            ['Modo AFK con respuesta personalizada a menciones', '<mensaje>'],
        ]

        this.exec = async (message, args, server) => {
            const data = { user: message.author.id, msg: 'Estoy algo ocupad@ ahora mismo.' }
            if(args[0]) data.msg = args.join(" ")

            const add = await server.addUserAFK(data)
            if(!add) return message.react('❌')

            try {
                message.member.setNickname('[AFK] ' + message.author.username)
            } catch {
                this.log.error('No pude cambiarle el nick al usuario ' + message.author.tag)
            }

            return this.sendEmbed(message, { author: [message.author.tag, message.author.avatarURL()], description: `Si algún usuario llega a mencionarte le daré el siguiente mensaje: ${data.msg}` })
        }
    }
}

module.exports = Command