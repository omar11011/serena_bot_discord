const Base = require('../../Tipos/Vitamina')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.tipo = 'Vitamina'
        this.nombre = 'Hierro'
        this.precio = 7500
        this.emoji = '<:iron:732404935165083800>'
        this.descripcion = 'Aumenta los puntos de esfuerzo de la defensa de tu Pokémon en 10 puntos.'

        this.exec = async object => {
            const result = { error: false }

            if(object.pokemon.defense_pe == 100) {
                result.error = true
                result.errorMessage = object.pokemon.pokemon + ' está al límite con esta vitamina.'
            } else {
                object.pokemon.defense_pe += (object.amount * 10)

                if(object.pokemon.defense_pe > 100) {
                    result.error = true
                    result.errorMessage = object.pokemon.pokemon + ' sólo puede recibir ' + (object.amount - (object.pokemon.defense_pe - 100) / 10) + ' unidades de ' + this.nombre + '.'
                } else {
                    await db.pokemon.update({ defense_pe: object.pokemon.defense_pe }, { where: { id: object.pokemon.id } })

                    result.embed = {
                        description: object.pokemon.pokemon + ' ha incrementado sus puntos de esfuerzo de defensa a ' + object.pokemon.defense_pe + '.',
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Item()