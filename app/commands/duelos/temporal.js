const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'temporal'
        this.cooldown = 4
        this.description = 'Durante la batalla, si tu pokémon puede convertirse en alguna de sus formas lo hará, si necesita algún nivel o item deberás equipárselo antes de iniciar el combate.'
        this.uses = [
            ['Convertir tu pokémon a una de sus formas', ''],
        ]

        this.exec = async (message, args, server) => {
            const user = new this.duel.base(message, message.author.id)
            const userData = await user.get()

            if(!userData) return user.delete()
            if(!userData.config.start) return

            const userDuel = new this.duel[userData.config.typeDuel](message, message.author.id)
            if(userData.place.guild != message.guild.id && !userDuel.automatic.temporal.anyGuild) return message.reply('tu duelo no se desarrolla en este servidor.')
            if(userData.place.channel != message.channel.id && !userDuel.automatic.temporal.anyGuild) return message.reply('tu duelo no se desarrolla en este canal.')

            const userTemporal = await userDuel.temporal(userData)
            if(userDuel.automatic.temporal.use) {
                const rival = new this.duel[userData.config.typeDuel](message, userData.config.rival)
                const rivalData = await rival.get()
                await rival.temporal(rivalData)
            }

            return message.reply(userTemporal.message)
        }
    }
}

module.exports = Command