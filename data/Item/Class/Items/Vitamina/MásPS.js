const Base = require('../../Tipos/Vitamina')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.tipo = 'Vitamina'
        this.nombre = 'Más PS'
        this.precio = 7500
        this.emoji = '<:more_ps:732404937316761693>'
        this.descripcion = 'Aumenta los puntos de esfuerzo de la salud de tu Pokémon en 10 puntos.'

        this.exec = async object => {
            const result = { error: false }

            if(object.pokemon.hp_pe == 100) {
                result.error = true
                result.errorMessage = object.pokemon.pokemon + ' está al límite con esta vitamina.'
            } else {
                object.pokemon.hp_pe += (object.amount * 10)

                if(object.pokemon.hp_pe > 100) {
                    result.error = true
                    result.errorMessage = object.pokemon.pokemon + ' sólo puede recibir ' + (object.amount - (object.pokemon.hp_pe - 100) / 10) + ' unidades de ' + this.nombre + '.'
                } else {
                    await db.pokemon.update({ hp_pe: object.pokemon.hp_pe }, { where: { id: object.pokemon.id } })

                    result.embed = {
                        description: object.pokemon.pokemon + ' ha incrementado sus puntos de esfuerzo de salud a ' + object.pokemon.hp_pe + '.',
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Item()