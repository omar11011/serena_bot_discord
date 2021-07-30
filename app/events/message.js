const Base = require('../../util/class/Event')
const Cooldown = require('../../util/class/Cooldown')
const Experience = require('../../util/class/Experience')

const timeWait = require('../../util/functions/timeWait')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'message'

        this.exec = async message => {
            if(message.author.bot || !message.guild.me.hasPermission('SEND_MESSAGES')) return

            const server = new this.server(message.guild.id)
            const prefix = await server.getPrefix()
            const isAFK = await server.removeUserAFK(message.author.id)

            if(isAFK) {
                try {
                    if(message.guild.me.hasPermission('MANAGE_NICKNAMES')) message.member.setNickname(message.author.username)
                } catch {
                    this.log.error('No pude cambiarle el nick al usuario ' + message.author.tag)
                }
                return this.sendEmbed(message, { author: [message.author.tag, message.author.avatarURL()], description: 'Has dejado de estar AFK.' })
            }
            if(!message.content.startsWith(prefix)) {
                if(message.mentions) {
                    const usersAFK = await server.getAFK()

                    message.mentions.users.map(e => {
                        if(e.id == this.client.config.bot.id) message.channel.send('> Mi prefijo en este servidor es: `' + prefix + '`')
                        else {
                            if(usersAFK.length > 0) {
                                usersAFK.map(f => {
                                    if(f.user == e.id) message.reply(`${e.username} se encuentra AFK pero te dejó un mensaje: ${f.msg}`)
                                })
                            }
                        }
                    })
                }
                if(message.content.length > 5) {
                    const experience = new Experience()

                    await experience.increment(message, message.author.id)
                    await server.sendSpawn(message, message.guild.id)
                }

                return
            }

            const args = message.content.slice(prefix.length).split(/ +/)
            const nameCommand = args.shift().toLowerCase()
            const command = this.client.findCommand(nameCommand, this.client.commands)
            if(!command) return

            // if(!this.client.config.bot.owner.includes(message.author.id)) return message.reply('están actualizándome, por favor espera unos minutos.')

            // Usuario Baneado Temporalmente
            const tempBan = await this.tempBan.isTempBan(message.author.id)
            if(tempBan && !this.client.config.bot.owner.includes(message.author.id)) return message.reply('no puedes ejecutar comandos debido a que te encuentras banead@ temporalmente.')

            // Comando deshabiltiado
            if(!command.enabled) return message.channel.send('❌ Este comando está deshabilitado temporalmente.')

            // Comandos de dueños
            if(command.ownerOnly && !this.client.config.bot.owner.includes(message.author.id)) return message.channel.send('❌ No tienes permiso para utilizar para ejecutar este comando.')

            // Comandos por MD
            if(command.guildOnly && message.channel.type !== "text") return message.reply('❌ No puedes usar este comando por MD.')

            // Comandos bloqueados en los canales
            const commandBlockInChannel = await server.commandBlockInChannel(message.channel.id, command.nombre)
            if(commandBlockInChannel) return message.react('🔒')

            // Permisos del bot
            if(command.botPermissions.length > 0) {
                let need = []

                command.botPermissions.map(e => {
                    if(!message.guild.me.hasPermission(e)) need.push('`' + e + '`')
                })
        
                if(need.length > 0) return message.channel.send('❌ Para ejecutar este comando necesito los siguientes permisos: ' + need.join(", "))
            }

            // Permisos del usuario
            if(command.userPermissions.length > 0) {
                let need = []

                command.userPermissions.map(e => {
                    if(!message.member.hasPermission(e)) need.push('`' + e + '`')
                })
        
                if(need.length > 0) return message.channel.send('❌ Para ejecutar este comando necesitas los siguientes permisos: ' + need.join(", "))
            }

            const cooldown = new Cooldown(message, command)
            const canMakeCommand = await cooldown.canMakeCommand()
            if(!canMakeCommand) return
            
            // CAPTCHA
            if(!command.ignoreCaptcha) {
                const captcha = new command.captcha(300, 100, message.author.id)
                const silence = await captcha.userSilence()
                if(silence.silence) {
                    const waitSilence = Math.round((silence.end - Date.now()) / 1000)
                    if(waitSilence > 0) return message.reply('no podrás ejecutar ningún comando de economía hasta dentro de ' + timeWait(waitSilence) + '.')
                    else {
                        captcha.notSilence(silence)
                        return message.reply('ya puedes volver a ejecutar comandos de economía, recuerda que si llegas a acumular ' + captcha.limitBan + ' sanciones obtendrás un baneo temporal que tendrás que apelar en el servidor oficial.')
                    }
                }
                const sendCaptcha = await captcha.send()
                if(sendCaptcha) {
                    return await captcha.exec(message, sendCaptcha)
                }
            }
            
            this.log.log(`[${message.author.id}] ${message.author.username}: ${message.content}`)
            
            try {
                command.exec(message, args, server)
            } catch(error) {
                this.log.error(`Ocurrió un error al ejecutar el comando ${command.nombre}: \n${error}`)
            }
        }
    }
}

module.exports = Event