const Base = require('../../../util/class/Command')

const { MessageCollector } = require('discord.js')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'setchannel'
        this.cooldown = 10
        this.description = 'Personaliza canales para especializarlos.'
        this.userPermissions = ['ADMINISTRATOR']
        this.uses = [
            ['Establecer canal de registros', 'log'],
            ['Establecer canal de bienvenida', 'welcome'],
        ]

        this.exec = async (message, args, server) => {
            const options = Object.keys(server.channels).filter(e => { return e != 'spawn' })
            if(!args[0] || !options.includes(args[0].toLowerCase())) return message.channel.send('Las opciones disponibles son las siguientes: ' + options.join(", ") + '.\nEjemplo: `' + await server.getPrefix() + this.nombre + ' log`.')

            message.channel.send('¿Estás seguro que deseas establecer este canal en la categoría `' + args[0].toLowerCase() + '`? Responde `yes` para confirmar.')
                .then(msg => {
                    setTimeout(() => {
                        msg.delete()
                    }, 10000)
                })

            const collector = new MessageCollector(message.channel, m => m.author.id == message.author.id, { time: 10000, max: 1 })

            collector.on('collect', async msg => {
                if(msg.content.toLowerCase() == 'yes') {
                    await server.setTypeChannel(args[0].toLowerCase(), message.channel.id)

                    return message.channel.send('> Se ha establecido este canal en la categoría `' + args[0].toLowerCase() + '`.')
                }
                else return msg.react('❌')
            })
        }
    }
}

module.exports = Command