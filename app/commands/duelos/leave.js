const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'leave'
        this.cooldown = 15
        this.description = 'Retírate de tu duelo actual.'
        this.uses = [
            ['Salir de un duelo', ''],
        ]

        this.exec = async (message, args, server) => {
            const user = new this.duel.base(message, message.author.id)
            const userData = await user.get()

            if(!userData) return user.delete()
            if(!userData.config.start) return

            const userDuel = new this.duel[userData.config.typeDuel](message, message.author.id)
            if(userData.place.guild != message.guild.id && !userDuel.automatic.leave.anyGuild) return message.reply('tu duelo no se desarrolla en este servidor.')
            if(userData.place.channel != message.channel.id && !userDuel.automatic.leave.anyChannel) return message.reply('tu duelo no se desarrolla en este canal.')

            if(userData.config.typeDuel == 'friendship') {
                const rival = new this.duel.base(message, userData.config.rival)
                const rivalData = await rival.get()
                if(!rivalData) {
                    user.delete()
                    rival.delete()
                    return message.reply('te he liberado de tu duelo.')
                }
            }
            
            return await userDuel.leave(userData)
        }
    }
}

module.exports = Command