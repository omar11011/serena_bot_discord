const Base = require('../../../util/class/Command')

const { MessageCollector } = require('discord.js')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'redirect'
        this.alias = ['redireccionar']
        this.cooldown = 10
        this.description = 'Redirecciona los spawns en tu servidor.'
        this.userPermissions = ['ADMINISTRATOR']
        this.uses = [
            ['Redireccionar el spawn al canal actual', ''],
            ['Eliminar un spawn', '--rm <canalId>'],
        ]

        this.exec = async (message, args, server) => {
            const channels = await server.getTypeChannel('spawn', true)
            const boost = await server.getBoost()
            const prefix = await server.getPrefix()
        
            if(!args[0]) {
                if(boost < 1) return message.channel.send('❌ Este servidor no posee más boosts.')
                if(channels.spawn.includes(message.channel.id)) return message.channel.send('❌ Este canal ya está establecido como spawn.')

                message.channel.send('¿Estás seguro que deseas establecer este canal como spawn? Responde `yes` para confirmar.')
                    .then(msg => {
                        setTimeout(() => {
                            msg.delete()
                        }, 10000)
                    })

                const collector = new MessageCollector(message.channel, m => m.author.id == message.author.id, { time: 10000, max: 1 })

                collector.on('collect', async msg => {
                    if(msg.content.toLowerCase() == 'yes') {
                        channels.spawn.push(message.channel.id)
                        server.folder.establecer('boost', boost - 1)
                        server.folder.establecer('channels', channels)
    
                        return this.sendEmbed(message, { color: '#16A167', author: ['¡Nuevo punto de spawn!', message.guild.iconURL()], description: 'Algunos pokémon aparecerán por acá de vez en cuando, según la actividad del servidor.', footer: `Para eliminar este canal de tus spawns usa el comando: ${prefix}${this.nombre} --rm ${message.channel.id}` })
                    }
                    else return msg.react('❌')
                })
            }
            else {
                const option = args[0].toLowerCase()
                args.splice(0, 1)

                if(['--rm', '--remove'].includes(option)) {
                    let channel = message.channel.id
                    if(args[0]) channel = args[0]
                    if(!channels.spawn.includes(channel)) return message.channel.send('❌ Este canal no pertenecía a tus spawns.')

                    channels.spawn = channels.spawn.filter(e => {
                        return e != channel
                    })
                    message.channel.send('¿Estás seguro que deseas eliminar el canal <#' + channel + '> de tus spawns? Responde `yes` para confirmar.')
                        .then(msg => {
                            setTimeout(() => {
                                msg.delete()
                            }, 10000)
                        })

                    const collector = new MessageCollector(message.channel, m => m.author.id == message.author.id, { time: 10000, max: 1 })

                    collector.on('collect', async msg => {
                        if(msg.content.toLowerCase() == 'yes') {
                            server.folder.establecer('boost', boost + 1)
                            server.folder.establecer('channels', channels)

                            return this.sendEmbed(message, { color: '#16A167', author: ['Spawn retirado', message.guild.iconURL()], description: 'Ya no aparecerán más pokémon en este canal.', footer: message.author.tag, timestamp: true })
                        }
                        else return msg.react('❌')
                    })
                }
                else return
            }
        }
    }
}

module.exports = Command