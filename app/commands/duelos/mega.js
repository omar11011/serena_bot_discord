const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'mega'
        this.cooldown = 4
        this.description = 'Megaevoluciona a tu pokémon durante la batalla, recuerda que debe tener equipada su respectiva megapiedra.'
        this.uses = [
            ['Megaevolucionar a tu pokémon', ''],
        ]

        this.exec = async (message, args, server) => {
            const user = new this.duel.base(message, message.author.id)
            const userData = await user.get()

            if(!userData) return user.delete()
            if(!userData.config.start) return

            const userDuel = new this.duel[userData.config.typeDuel](message, message.author.id)
            if(userData.place.guild != message.guild.id && !userDuel.automatic.mega.anyGuild) return message.reply('tu duelo no se desarrolla en este servidor.')
            if(userData.place.channel != message.channel.id && !userDuel.automatic.mega.anyGuild) return message.reply('tu duelo no se desarrolla en este canal.')

            const userMega = await userDuel.mega(userData)
            if(userDuel.automatic.mega.use) {
                const rival = new this.duel[userData.config.typeDuel](message, userData.config.rival)
                const rivalData = await rival.get()
                await rival.mega(rivalData)
            }

            return message.reply(userMega.message)
        }
    }
}

module.exports = Command