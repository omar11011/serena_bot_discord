const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'ban'
        this.alias = ['banear']
        this.userPermissions = ['BAN_MEMBERS']
        this.botPermissions = ['BAN_MEMBERS']
        this.uses = [
            ['Banear un usuario', '<user> <razón>'],
            ['Banear permanentemente a un usuario', '<user> --perma <razón>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <user> [reason] [--perma]`')

            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if(!user) return message.channel.send('❌ La ID introducida no le pertenece a ningún usuario.')

            args.splice(0, 1)
            const data = { reason: 'Ya no eres bienvenid@ en ' + message.guild.name + '.', perma: false }
            if(args.includes('--perma')) {
                data.perma = true
                args = args.filter(e => {
                    return e != '--perma'
                })
            }
            if(args.length > 0) data.reason = args.join(" ")
            if(!message.guild.member(user).bannable) return message.reply('❌ No puedo banear a este usuario.')

            try {
                message.guild.member(user).ban()
            } catch(err) {
                this.log.error(err)
                return message.react('❌')
            }

            const embed = {
                color: '#16A167',
                author: '🔨 Usuario baneado',
                fields: [
                    { name: 'Usuario', value: user.user.tag, inline: true },
                    { name: 'Admin', value: message.author.tag, inline: true },
                    { name: 'Razón', value: data.reason, inline: true },
                ],
                timestamp: true
            }
            if(data.perma) {
                const usersPerma = await server.getUsersPerma()
                if(!usersPerma.ban.includes(user.id)) usersPerma.ban.push(user.id)

                server.folder.establecer('perma', usersPerma)
                embed.description = 'Este usuario no podrá evadir ser baneado incluso si sale y vuelve a entrar al servidor.'
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command