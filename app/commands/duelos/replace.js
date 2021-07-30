const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'replace'
        this.alias = ['olvidar']
        this.cooldown = 4
        this.description = 'Logra que tu pokémon pueda olvidar algún movimiento para que aprenda otro.'
        this.uses = [
            ['Olvidar un movimiento', '<movimiento>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.channel.send('❌ Debes especificar el nombre del movimiento que deseas que tu pokémon olvide.')

            const move = this.movement.get(args.join(" "))
            if(!move) return message.channel.send('❌ Este movimiento no existe.')

            const pokemon = await this.db.pokemon.findOne({ where: { select: true }, attributes: ['id', 'pokemon', 'moves'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!pokemon) return message.channel.send('❌ No tienes ningún pokémon seleccionado.')

            if(pokemon.moves == null) pokemon.moves = []
            else pokemon.moves = pokemon.moves.split(",")

            if(!pokemon.moves.includes(move.nombre)) return message.channel.send('❌ Tu pokémon no había aprendido este movimiento.')

            pokemon.moves = pokemon.moves.filter(e => {
                return e != move.nombre
            })

            if(pokemon.moves.length == 0) pokemon.moves = null
            else pokemon.moves = pokemon.moves.join(",")

            await this.db.pokemon.update({ moves: pokemon.moves }, { where: { id: pokemon.id } })

            return this.sendEmbed(message, { color: '#16A167', author: [message.author.tag, message.author.avatarURL()], description: pokemon.pokemon + ' ha olvidado el movimiento ' + move.nombre + ' con éxito.' })
        }
    }
}

module.exports = Command