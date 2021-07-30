const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'move'
        this.cooldown = 5
        this.description = 'Ejecuta un movimiento en combate. Para usar movimientos z no olvides portar dicho cristal en tu aro z.'
        this.uses = [
            ['Hacer un movimiento', '<número>'],
            ['Hacer movimiento Z', '<número> z'],
        ]

        this.exec = async (message, args, server) => {
            const user = new this.duel.base(message, message.author.id)
            const userData = await user.get()

            if(!userData) return user.delete()
            if(!userData.config.start) return

            const userDuel = new this.duel[userData.config.typeDuel](message, message.author.id)
            if(userData.place.guild != message.guild.id && !userDuel.automatic.move.anyGuild) return message.reply('tu duelo no se desarrolla en este servidor.')
            if(userData.place.channel != message.channel.id && !userDuel.automatic.move.anyGuild) return message.reply('tu duelo no se desarrolla en este canal.')

            const obj = { number: 0, z: false }
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <número>`')
            if(isNaN(args[0]) || parseInt(args[0]) < 1 || parseInt(args[0]) > userData.moves.length) return message.react('❓')
            if(args[1] && args[1].toLowerCase() == 'z') obj.z = true
            obj.number = parseInt(args[0] - 1)

            const rival = new this.duel[userData.config.typeDuel](message, userData.config.rival)
            const rivalData = await rival.get()
            if(!rivalData) {
                user.delete()
                rival.delete()
                return
            }
            if(rival.automatic.move.use) await rival.moveRival(rivalData, obj)

            await userDuel.move(userData, rivalData, obj)
        }
    }
}

module.exports = Command