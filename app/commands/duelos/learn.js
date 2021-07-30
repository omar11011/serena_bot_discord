const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'learn'
        this.alias = ['aprender']
        this.cooldown = 4
        this.description = 'Tus pokémon podrán aprender movimientos para usarlos en los combates.'
        this.uses = [
            ['Aprender un movimiento', '<movimiento>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.channel.send('❌ Debes ingresar el nombre del movimiento que deseas que tu pokémon aprenda.')

            const move = this.movement.get(args.join(" "))
            if(!move) return message.channel.send('❌ Este movimiento no existe.')

            const embed = {
                color: 'RED',
                author: [message.author.tag, message.author.avatarURL()],
            }
            const pokemonSelect = await this.db.pokemon.findOne({ where: { select: true }, attributes: ['id', 'pokemon', 'level', 'moves'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })

            if(!pokemonSelect) {
                embed.description = 'Necesitas tener un pokémon seleccionado para que pueda aprender este movimiento.'
                return this.sendEmbed(message, embed)
            }

            const data = { canLearn: false, hasLevel: false, learned: [] }
            const pokemon = this.pokemon.get(pokemonSelect.pokemon)

            if(pokemonSelect.moves == null) pokemonSelect.moves = []
            else pokemonSelect.moves = pokemonSelect.moves.split(",")
            
            pokemon.movimientos.map(e => {
                if(e[0].nombre == move.nombre) {
                    data.canLearn = true
                    if(e[1] <= pokemonSelect.level) data.hasLevel = true
                }
            })
            if(!data.canLearn) {
                embed.description = pokemon.pokemon + ' no puede aprender este movimiento.'
                return this.sendEmbed(message, embed)
            }
            if(!data.hasLevel) {
                embed.description = pokemon.pokemon + ' aún no tiene el nivel necesario para aprender este movimiento.'
                return this.sendEmbed(message, embed)
            }
            
            for(let i = 0; i < pokemonSelect.moves.length; i++) {
                pokemon.movimientos.map(e => {
                    if(pokemonSelect.moves[i] == e[0].nombre) data.learned.push(e[0].nombre)
                })
            }
            
            if(data.learned.includes(move.nombre)) {
                embed.description = pokemon.pokemon + ' ya ha aprendido este movimiento.'
                return this.sendEmbed(message, embed)
            }
            if(data.learned.length == 4) {
                embed.description = pokemon.pokemon + ' ya ha aprendido sus cuatro movimientos.'
                return this.sendEmbed(message, embed)
            }

            data.learned.push(move.nombre)

            embed.color = '#16A167'
            embed.description = pokemon.pokemon + ' ha aprendido ' + move.nombre + ' satisfactoriamente.'

            await this.db.pokemon.update({ moves: data.learned.join(",") }, { where: { id: pokemonSelect.id } })

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command