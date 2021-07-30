const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'moves'
        this.description = 'Obtén una lista de todos los movimientos que puede aprender un pokémon.'
        this.uses = [
            ['Lista de movimientos de tu pokémon', ''],
            ['Lista de movimientos de un pokémon', '<pokémon>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) {
                var pokemonSelect = await this.db.pokemon.findOne({ where: { select: true }, attributes: ['pokemon', 'moves'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
                if(!pokemonSelect) return message.channel.send('❌ No tienes ningún pokémon seleccionado.')

                args = pokemonSelect.pokemon.split(" ")
            }

            const pokemon = this.pokemon.get(args.join(" "))
            if(!pokemon) return message.channel.send('❌ Este pokémon no existe.')
            
            const moves = []
            const embed = {
                color: pokemon.color.hexadecimal,
                author: 'Movimientos de ' + pokemon.pokemon,
                footer: 'Información solicitada por el usuario: ' + message.author.tag,
            }
            const lengthTotal = pokemon.movimientos[pokemon.movimientos.length - 1][1].toString().length

            for(let i = 0; i < pokemon.movimientos.length; i++) {
                if(pokemon.movimientos[i][0].nombre != undefined) {
                    const lengthID = pokemon.movimientos[i][1].toString().length
                    const level = lengthTotal == lengthID ? pokemon.movimientos[i][1] : ('0').repeat(lengthTotal - lengthID) + pokemon.movimientos[i][1]

                    moves.push('Nivel ' + level + '   |   ' + pokemon.movimientos[i][0].nombre)
                }
            }

            embed.fields = [
                { name: 'Movimientos', value: '```' + moves.join("\n") + '```' },
            ]

            if(pokemonSelect && pokemonSelect.moves != null) {
                pokemonSelect.moves = pokemonSelect.moves.split(",")

                for(let i = 0; i < pokemonSelect.moves.length; i++) pokemonSelect.moves[i] = '[' + (i + 1) + '] ' + pokemonSelect.moves[i]

                embed.fields.push({ name: 'Aprendidos', value: '```' + pokemonSelect.moves.join("\n") + '```' })
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command