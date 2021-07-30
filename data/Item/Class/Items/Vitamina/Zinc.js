const Base = require('../../Tipos/Vitamina')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.tipo = 'Vitamina'
        this.nombre = 'Zinc'
        this.precio = 7500
        this.emoji = '<:zinc:732402966144745502>'
        this.descripcion = 'Aumenta los puntos de esfuerzo de la defensa especial de tu Pokémon en 10 puntos.'

        this.exec = async object => {
            const result = { error: false }

            if(object.pokemon.spdefense_pe == 100) {
                result.error = true
                result.errorMessage = object.pokemon.pokemon + ' está al límite con esta vitamina.'
            } else {
                object.pokemon.spdefense_pe += (object.amount * 10)

                if(object.pokemon.spdefense_pe > 100) {
                    result.error = true
                    result.errorMessage = object.pokemon.pokemon + ' sólo puede recibir ' + (object.amount - (object.pokemon.spdefense_pe - 100) / 10) + ' unidades de ' + this.nombre + '.'
                } else {
                    await db.pokemon.update({ spdefense_pe: object.pokemon.spdefense_pe }, { where: { id: object.pokemon.id } })

                    result.embed = {
                        description: object.pokemon.pokemon + ' ha incrementado sus puntos de esfuerzo de defensa especial a ' + object.pokemon.spdefense_pe + '.',
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Item()