const Base = require('../../Tipos/Vitamina')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.tipo = 'Caramelo Dinamax'
        this.nombre = 'Caramelo Dinamax'
        this.precio = 100
        this.metodo = 'Gemas'
        this.vendible = false
        this.descripcion = 'Aumenta el nivel gigamax de tu Pokémon en uno.'

        this.exec = async object => {
            const result = { error: false }

            if(object.pokemon.dynamax == 10) {
                result.error = true
                result.errorMessage = object.pokemon.pokemon + ' ya tiene el nivel dinamax a tope.'
            } else {
                object.pokemon.dynamax++

                if(object.pokemon.dynamax > 10) {
                    result.error = true
                    result.errorMessage = object.pokemon.pokemon + ' sólo puede recibir ' + (object.amount - (object.pokemon.dynamax - 10)) + ' unidades de ' + this.nombre + '.'
                } else {
                    await db.pokemon.update({ dynamax: object.pokemon.dynamax }, { where: { id: object.pokemon.id } })

                    result.embed = {
                        description: object.pokemon.pokemon + ' ha aumentado su nivel dinamax al ' + object.pokemon.dynamax + '/10.'
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Item()