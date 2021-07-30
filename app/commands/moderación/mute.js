const Base = require('../../../util/class/Command')
const getFlags = require('../../../util/functions/getFlags')
const timeWait = require('../../../util/functions/timeWait')
const convertTime = require('../../../util/functions/convertTime')
const getContentOfFlag = require('../../../util/functions/getContentOfFlag')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'mute'
        this.alias = ['mutear']
        this.userPermissions = ['MANAGE_ROLES']
        this.botPermissions = ['MANAGE_ROLES']
        this.uses = [
            ['Mutear a un usuario', '--time <tiempo> --reason <razón>'],
            ['Mutear permanentemente a un usuario', '--time <tiempo> --reason <razón> --perma'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <user> --time <tiempo> --reason <razón> [--perma]`')

            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if(!user) return message.channel.send('❌ La ID introducida no le pertenece a ningún usuario.')
            if(user.id == message.author.id) return message.channel.send('❌ No puedes mutearte a ti mismo.')
            if(user.id == this.client.user.id) return message.channel.send('❌ No puedes mutearme.')
            if(user.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('❌ No puedes mutear a esta persona.')

            const content = args.join(" ").split(new RegExp (['--', ' --'].join('|'),'g'))
            content.splice(0, 1)

            const contentParams = getFlags(content)
            const data = { time: 0, reason: 'Mal comportamiento.', perma: false }
            if(contentParams.length > 0) {
                if(contentParams.includes('reason')) {
                    const contentArgs = getContentOfFlag(content, contentParams, 'reason')
                    if(contentArgs.length > 0) data.reason = contentArgs.join(" ")
                }
                if(contentParams.includes('perma')) {
                    data.perma = true
                    const users = await server.getUsersPerma()
                    if(!users.mute.includes(user.id)) {
                        users.mute.push(user.id)
                        server.folder.establecer('perma', users)
                    }
                }
                if(contentParams.includes('time') && !data.perma) {
                    const timeArgs = getContentOfFlag(content, contentParams, 'time')
                    const result = convertTime(timeArgs)
                    data.time = result.time
                    if(result.error) return message.channel.send(result.typeError.join("\n"))
                    if(result.time <= 0) return message.react('❌')
                }
            }

            let role = message.guild.roles.cache.find(r => r.name === 'Muted')
            if(!role) {
                await message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        permissions: ['VIEW_CHANNEL'],
                    },
                }).then(e => {
                    role = e

                    try {
                        message.author.send('He creado el rol `Muted` en el servidor ' + message.guild.name + ' ya que no existía, asegúrate de que los permisos y la posición de este mismo sean los correctos.')
                    } catch {
                        this.log.error('No pude enviarle DM a' + message.author.tag + ' sobre la creación del rol Muted.')
                    }
                })
            }
            if(user._roles.includes(role.id)) return message.channel.send('❌ Este usuario ya estaba muteado.')

            user.roles.add(role)

            const embed = {
                color: '#16A167',
                author: '🔨 Usuario muteado',
                fields: [
                    { name: 'Usuario', value: user.user.tag, inline: true },
                    { name: 'Admin', value: message.author.tag, inline: true },
                    { name: 'Tiempo', value: data.time == 0 ? 'Indefinido' : timeWait(data.time), inline: true },
                    { name: 'Razón', value: data.reason }
                ],
                footer: [message.guild.name, message.guild.iconURL()],
                timestamp: true
            }

            if(data.perma) embed.description = 'Este usuario no podrá evadir ser muteado incluso si sale y vuelve a entrar al servidor.'

            this.sendEmbed(message, embed)

            if(data.time > 0) {
                user.timeout = message.client.setTimeout(async () => {
                    try {
                        await user.roles.remove(role)
                    } catch (err) {
                        this.log.error(err)
                    }
                }, data.time * 1000)
            }

            return
        }
    }
}

module.exports = Command