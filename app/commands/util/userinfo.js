const Base = require('../../../util/class/Command')
const moment = require('moment')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'userinfo'
        this.description = 'Muestra información detallada de ti o del usuario mencionado.'
        this.uses = [
            ['Información de un usuario', '<user>'],
        ]

        this.exec = async (message, args, server) => {
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author)
            if(!user) return message.channel.send('❌ La ID introducida no le pertenece a ningún usuario.')
            
            const roles = user._roles
            for(let i = 0; i < roles.length; i++) roles[i] = '<@&' + roles[i] + '>'
            
            const embed = {
                author: [user.user.tag, user.user.displayAvatarURL()],
                fields: [
                    { name: 'Roles', value: roles.length > 0 ? roles.join(" ") : 'Ninguno', inline: true },
                    { name: 'Cuenta creada', value: moment(user.user.createdAt).format('LLL'), inline: true },
                    { name: 'Entrada al servidor', value: moment(user.joinedAt).format('LLLL'), inline: true },
                ],
                footer: `ID: ${user.user.id}`,
            }
            
            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command