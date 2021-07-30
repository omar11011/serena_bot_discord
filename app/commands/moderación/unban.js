const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'unban'
        this.alias = ['desbanear']
        this.userPermissions = ['BAN_MEMBERS']
        this.botPermissions = ['BAN_MEMBERS']
        this.uses = [
            ['Desbanear a un usuario', '<userId>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <id>`')

            const usersPerma = await server.getUsersPerma()
            if(usersPerma.ban.includes(args[0])) {
                usersPerma.ban = usersPerma.ban.filter(e => {
                    return e != args[0]
                })
                server.folder.establecer('perma', usersPerma)
            }

            message.guild.members.unban(args[0])

            return this.sendEmbed(message, { color: '#16A167', author: '🔨 Usuario desbaneado', fields: [ { name: 'ID Usuario', value: args[0], inline: true }, { name: 'Admin', value: message.author.tag, inline: true } ], footer: [message.guild.name, message.guild.iconURL()], timestamp: true })
        }
    }
}

module.exports = Command