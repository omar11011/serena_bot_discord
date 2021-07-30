const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'unmute'
        this.alias = ['desmutear']
        this.userPermissions = ['MANAGE_ROLES']
        this.botPermissions = ['MANAGE_ROLES']
        this.uses = [
            ['Desmutear a un usuario', '<user>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <user>`')

            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if(!user) return message.channel.send('❌ La ID introducida no le pertenece a ningún usuario.')
            
            const usersPerma = await server.getUsersPerma()
            if(usersPerma.mute.includes(user.id)) {
                usersPerma.mute = usersPerma.mute.filter(e => {
                    return e != user.id
                })
                server.folder.establecer('perma', usersPerma)
            }

            const role = message.guild.roles.cache.find(r => r.name === 'Muted')
            if(!role) return message.channel.send('❌ No existe el rol `Muted` en este servidor.')
            if(!user._roles.includes(role.id)) return message.channel.send('❌ Este usuario no estaba muteado.')

            user.roles.remove(role)

            return this.sendEmbed(message, { color: '#16A167', author: '🔨 Usuario desmuteado', fields: [ { name: 'Usuario', value: user.user.tag, inline: true }, { name: 'Admin', value: message.author.tag, inline: true } ], footer: [message.guild.name, message.guild.iconURL()], timestamp: true })
        }
    }
}

module.exports = Command