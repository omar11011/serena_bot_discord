const Base = require('../../Tipos/Vitamina')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.tipo = 'Vitamina'
        this.nombre = 'Carburante'
        this.precio = 7500
        this.emoji = '<:carbos:732404935374929921>'
        this.descripcion = 'Aumenta los puntos de esfuerzo de la velocidad de tu Pokémon en 10 puntos.'

        this.exec = async object => {
            const result = { error: false }

            if(object.pokemon.speed_pe == 100) {
                result.error = true
                result.errorMessage = object.pokemon.pokemon + ' está al límite con esta vitamina.'
            } else {
                object.pokemon.speed_pe += (object.amount * 10)

                if(object.pokemon.speed_pe > 100) {
                    result.error = true
                    result.errorMessage = object.pokemon.pokemon + ' sólo puede recibir ' + (object.amount - (object.pokemon.speed_pe - 100) / 10) + ' unidades de ' + this.nombre + '.'
                } else {
                    await db.pokemon.update({ speed_pe: object.pokemon.speed_pe }, { where: { id: object.pokemon.id } })

                    result.embed = {
                        description: object.pokemon.pokemon + ' ha incrementado sus puntos de esfuerzo de velocidad a ' + object.pokemon.speed_pe + '.',
                    }
                }
            }

            return result
        }
    }
}

module.exports = new Item()