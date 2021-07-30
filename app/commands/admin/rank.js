const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'rank'
        this.ownerOnly = true
        this.uses = [
            ['Dar rango', '<privLevel>'],
        ]

        this.exec = async (message, args, server) => {
            if(args.length < 2) return message.react('❓')

            const data = { user: null, rank: null }
            const mencion = message.mentions.members.first()

            if(mencion) data.user = mencion.id
            else data.user = args[0]

            const rank = parseInt(args[1])
            if(rank < 0 || rank > this.ranks.length - 1) return message.react('❌')
            if(rank > 0) data.rank = rank

            await this.db.trainer.update({ rank: data.rank }, { where: { user: data.user } })

            return this.sendEmbed(message, { color: '#16A167', author: '☑️ ' + (data.rank != null ? '¡Bienvenid@ al equipo!' : 'Rango entregado'), description: (mencion ? mencion.user.tag : 'El usuario con ID ' + data.user) + ' ha recibido el rango ' + this.ranks[rank] + '.', timestamp: true })
        }
    }
}

module.exports = Command