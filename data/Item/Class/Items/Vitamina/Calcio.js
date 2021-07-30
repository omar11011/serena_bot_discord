const Base = require('../../Tipos/Vitamina')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.tipo = 'Vitamina'
        this.nombre = 'Calcio'
        this.precio = 7500
        this.emoji = '<:calcium:732404934477086782>'
        this.descripcion = 'Aumenta los puntos de esfuerzo del ataque especial de tu Pokémon en 10 puntos.'

        this.exec = async object => {
            const result = { error: false }

            if(object.pokemon.spattack_pe == 100) {
                result.error = true
                result.errorMessage = object.pokemon.pokemon + ' está al límite con esta vitamina.'
            } else {
                object.pokemon.spattack_pe += (object.amount * 10)

                if(object.pokemon.spattack_pe > 100) {
                    result.error = true
                    result.errorMessage = object.pokemon.pokemon + ' sólo puede recibir ' + (object.amount - (object.pokemon.spattack_pe - 100) / 10) + ' unidades de ' + this.nombre + '.'
                } else {
                    await db.pokemon.update({ spattack_pe: object.pokemon.spattack_pe }, { where: { id: object.pokemon.id } })

                    result.embed = {
                        description: object.pokemon.pokemon + ' ha incrementado sus puntos de esfuerzo de ataque especial a ' + object.pokemon.spattack_pe + '.',
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Item()