const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'explore'
        this.alias = ['explorar']
        this.cooldown = 5
        this.description = 'Lucha contra algún pokémon salvaje.'
        this.uses = [
            ['Lucha contra un pokémon salvaje', ''],
        ]

        this.exec = async (message, args, server) => {
            const config = { match: false, rival: 'RANDOM' + message.author.id }
            const duel = new this.duel.random(message, message.author.id)
            const createUser = await duel.create(config)
            if(createUser.error) return

            duel.start(createUser.data)

            config.user = config.rival
            config.rival = message.author.id
            const createRival = await duel.generate(createUser.data, config)

            return duel.duelStart(createUser.data, createRival)
        }
    }
}

module.exports = Command