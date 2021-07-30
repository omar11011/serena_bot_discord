const Base = require('../../../util/class/Command')

const { MessageCollector } = require('discord.js')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'duel'
        this.alias = ['duelo']
        this.cooldown = 10
        this.description = 'Reta a otro entrenador a un duelo amistoso.'
        this.uses = [
            ['Desafiar a un usuario', '<@usuario>'],
        ]

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            const mencion = message.mentions.users.first()
            const config = { match: false, answered: false }

            if(!mencion || mencion.bot || mencion.id == message.author.id) return message.react('❌')
            if(args[1]) config.match = true, config.level = args[1]

            const user = new this.duel.friendship(message, message.author.id)
            config.rival = mencion.id
            const createUser = await user.create(config)
            if(createUser.error) return

            config.rival = mencion.id
            message.channel.send('<@' + mencion.id + '>, el usuario ' + message.author.username + ' te ha retado a una batalla amistosa, acéptale escribiendo `' + prefix + 'accept`.').then(m => {
                setTimeout(() => {
                    m.delete()
                }, 15000)
            })

            const collector = new MessageCollector(message.channel, m => m.author.id == mencion.id, { time: 10000, max: 1 })
            collector.on('collect', async msg => {
                config.answered = true
                const response = msg.content.toLowerCase()

                if(response == prefix.toLowerCase() + 'accept') {
                    config.rival = message.author.id
                    const rival = new this.duel.friendship(msg, mencion.id)
                    const createRival = await rival.create(config)
                    if(createRival.error) {
                        user.delete()
                        rival.delete()
                        return msg.reply(createRival.message)
                    }

                    user.start(createUser.data)
                    rival.start(createRival.data)

                    return user.duelStart(createUser.data, createRival.data)
                } else {
                    user.delete()
                    return msg.react('❌')
                }
            })

            setTimeout(() => {
                if(!config.answered) {
                    user.delete()
                    return message.react('⌛')
                }
            }, 10000)
        }
    }
}

module.exports = Command