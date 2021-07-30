const Base = require('../../Tipos/Vitamina')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.tipo = 'Poción Gigamax'
        this.nombre = 'Poción Gigamax'
        this.precio = 75
        this.metodo = 'Gemas'
        this.vendible = false
        this.descripcion = 'Dale el factor Dinamax a algún pokémon.'
        this.amountUsed = 1

        this.exec = async object => {
            const result = { error: false }
            
            if(object.pokemon.gigamax) {
                result.error = true
                result.errorMessage = object.pokemon.pokemon + ' ya posee el factor gigamax.'
            } else {
                await db.pokemon.update({ gigamax: true }, { where: { id: object.pokemon.id } })

                result.embed = {
                    description: object.pokemon.pokemon + ' ha conseguido el factor gigamax.'
                }
            }

            return result
        }
    }
}

module.exports = new Item()