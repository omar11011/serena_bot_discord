const Base = require('../../Base')
const db = require('../../../../server/models')

class Menta extends Base {
    constructor() {
        super()

        this.categoria = 'Menta'
        this.nombre = 'Menta'
        this.precio = 100
        this.vendible = true
        this.amountUsed = 1

        this.exec = async object => {
            const nature = this.nombre.split(" ")[1]
            const result = {
                error: false,
                embed: {
                    description: 'La naturaleza de ' + object.pokemon.pokemon + ' ha cambiado a ' + nature + '.',
                },
            }

            await db.pokemon.update({ nature: nature }, { where: { id: object.pokemon.id } })

            return result
        }
    }
}

module.exports = Menta