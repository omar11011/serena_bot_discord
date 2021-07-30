const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'gigamax'
        this.alias = ['giga', 'gigantamax']
        this.description = 'Tu pokémon utilizará el factor gigamax, si es que lo posee, dentro de una batalla.'
        this.uses = [
            ['Usar el factor gigamax de tu pokémon', ''],
        ]

        this.exec = async (message, args, server) => {
            const user = new this.duel.base(message, message.author.id)
            const userData = await user.get()

            if(!userData) return user.delete()
            if(!userData.config.start) return

            const userDuel = new this.duel[userData.config.typeDuel](message, message.author.id)
            if(userData.place.guild != message.guild.id && !userDuel.automatic.gigamax.anyGuild) return message.reply('tu duelo no se desarrolla en este servidor.')
            if(userData.place.channel != message.channel.id && !userDuel.automatic.gigamax.anyChannel) return message.reply('tu duelo no se desarrolla en este canal.')

            const userGigamax = await userDuel.gigamax(userData)
            if(userDuel.automatic.gigamax.use) {
                const rival = new this.duel[userData.config.typeDuel](message, userData.config.rival)
                const rivalData = await rival.get()
                await rival.gigamax(rivalData)
            }

            return message.reply(userGigamax.message)
        }
    }
}

module.exports = Command