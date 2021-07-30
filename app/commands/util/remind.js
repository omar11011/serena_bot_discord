const Base = require('../../../util/class/Command')
const Remind = require('../../../util/class/Remind')

const moment = require('moment')

const getFlags = require('../../../util/functions/getFlags')
const convertTime = require('../../../util/functions/convertTime')
const getContentOfFlag = require('../../../util/functions/getContentOfFlag')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'remind'
        this.cooldown = 5
        this.description = 'Lanza un mensaje de recordatorio a tu DM luego de un cierto tiempo.'
        this.uses = [
            ['Establecer recordatorio', '--msg <recordatorio> --time <tiempo>'],
        ]

        this.exec = async (message, args, server) => {
            const embed = { author: [message.author.tag, message.author.avatarURL()], timestamp: true }
            const prefix = await server.getPrefix()

            if(!args[0]) return message.reply('el uso de este comando es: `' + prefix + this.nombre + ' --msg <recordatorio> --time <tiempo>`.')
            else {
                const reminds = await Remind.numReminds(message.author.id)
                const content = args.join(" ").split(new RegExp (['--', ' --'].join('|'),'g'))
                content.splice(0, 1)

                const contentParams = getFlags(content)

                if(contentParams.includes('list')) {
                    if(reminds.length < 1) {
                        embed.color = 'RED'
                        embed.description = 'No tienes recordatorios.'
                    } else {
                        embed.fields = []

                        for(let i = 0; i < reminds.legth; i++) {
                            embed.fields.push({ name: reminds[i].time, value: reminds[i].msg, inline: true })
                        }
                    }
                }
                else if(contentParams.includes('clear')) {
                    if(reminds.length < 1) return message.channel.send('❌ No tenías ningún recordatorio pendiente.')

                    const data = { all: false, id: null }
                    const contentArgs =getContentOfFlag(content, contentParams, 'clear')

                    embed.color = '#16A167'

                    if(contentArgs.length > 0) {
                        if(contentArgs[0] == 'all') data.all = true
                        else data.id = contentArgs[0]
                    }

                    const object = { user: message.author.id, time: data.id }

                    if(data.all) embed.description = 'Todos tus recordatorios han sido eliminados.'
                    else embed.description = 'Se ha eliminado tu recordatorio número `' + data.id + '`'

                    const result = await Remind.removeRemind(object, data.all)
                    if(!result) return message.reply('no tenías ningún recordatorio con esta ID.')
                }
                else if(contentParams.includes('msg')) {
                    if(reminds.length >= Remind.limit) return message.reply('ya tienes muchos recordatorios pendientes.')
                    if(!contentParams.includes('time')) return message.reply('no has añadido el tiempo de espera de tu recordatorio.')

                    const timeArgs = getContentOfFlag(content, contentParams, 'time')
                    const msg = getContentOfFlag(content, contentParams, 'msg').join(" ")
                    const result = convertTime(timeArgs)

                    result.time *= 1000
                    if(result.error) return message.channel.send(result.typeError.join("\n"))
                    if(result.time <= 0) return message.react('❌')

                    const alarma = Date.now() + result.time

                    embed.description = `Has agregado un nuevo recordatorio (${reminds.length + 1}/${Remind.limit}).`
                    embed.fields = [
                        { name: 'Mensaje', value: msg, inline: true },
                        { name: 'Alarma', value: moment.unix((alarma)/1000).format("DD MMM YYYY hh:mm a"), inline: true },
                    ]
                    embed.footer = 'Recuerda que el horario de ' + this.client.config.bot.name + ' rige en UTC-5.'

                    Remind.addRemind({ user: message.author.id, msg: msg, time: alarma })

                    setTimeout(() => {
                        Remind.removeRemind({ user: message.author.id, msg: msg, time: alarma })

                        try {
                            return this.sendEmbed(message, { md: true, author: '⏰ Recordatorio', description: msg, timestamp: true })
                        } catch {
                            return message.channel.send('> ⏰ Tienes un recordatorio: ' + msg)
                        }
                    }, result.time)
                }
                else return message.react('❌')
            }
            
            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command