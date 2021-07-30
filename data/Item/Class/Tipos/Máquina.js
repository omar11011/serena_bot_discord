const Base = require('../../Base')
const db = require('../../../../server/models')

class Máquina extends Base {
    constructor() {
        super()

        this.nombre = 'Máquina'
        this.categoria = 'Máquina'
        this.transferible = false
        this.gastable = false
        this.metodo = 'Gemas'
        this.vendible = false
        this.uses = 3
        this.pokemon = []
        this.move = 'Movimiento'
        this.amountUsed = 1

        this.exec = async object => {
            const result = { error: false }

            if(!object.pokemon) {
                result.error = true
                result.errorMessage = 'No tienes ningún pokémon seleccionado.' 
            }
            else {
                if(object.pokemon.moves == null) object.pokemon.moves = []
                else object.pokemon.moves = object.pokemon.moves.split(",")

                if(object.pokemon.moves.includes(this.move)) {
                    result.error = true
                    result.errorMessage = object.pokemon.pokemon + ' ya ha aprendido este movimiento.'
                }
                if(object.pokemon.moves.length == 6) {
                    result.error = true
                    result.errorMessage = object.pokemon.pokemon + 'ya ha aprendido sus seis movimientos.'
                }
                if(!this.pokemon.includes(object.dataPokemon.id)) {
                    result.error = true
                    result.errorMessage = object.pokemon.pokemon + ' no puede usar esta máquina.'
                }

                if(!result.error) {
                    result.embed = {
                        description: object.pokemon.pokemon + ' ha aprendido ' + this.move + ' satisfactoriamente.',
                    }
                    object.pokemon.moves.push(this.move)

                    await db.pokemon.update({ moves: object.pokemon.moves.join(",") }, { where: { id: object.pokemon.id } })
                }
            }

            return result
        }
    }
}

module.exports = Máquina