const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'kick'
        this.alias = ['expulsar']
        this.userPermissions = ['KICK_MEMBERS']
        this.botPermissions = ['KICK_MEMBERS']
        this.uses = [
            ['Expulsar a un usuario del servidor', '<user>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <user> [razón]`')
            
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if(!user) return message.channel.send('❌ La ID introducida no le pertenece a ningún usuario.')
            if(user.id == message.author.id) return message.channel.send('❌ No puedes expulsarte a ti mismo.')
            if(user.id == this.client.config.bot.id) return message.channel.send('❌ No puedes expulsarme.')

            let reason = 'Ya no eres bienvenid@ en ' + message.guild.name + '.'

            if(args.length > 1) reason = args.slice(1).join(' ')
            if(!message.guild.member(user).kickable) return message.reply('❌ No puedo expulsar a este usuario.')

            message.guild.member(user).kick(reason)

            return this.sendEmbed(message, { color: '#16A167', author: '🔨 Usuario expulsado', fields: [ { name: 'Usuario', value: user.user.tag, inline: true }, { name: 'Admin', value: message.author.tag, inline: true }, { name: 'Razón', value: reason } ], timestamp: true })
        }
    }
}

module.exports = Command