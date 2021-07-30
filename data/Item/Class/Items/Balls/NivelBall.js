const Base = require('../../Tipos/Ball')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Nivel Ball'
        this.precio = 400
        this.emoji = '<:nivel_ball:733515615398264832>'
        this.descripcion = 'a: Nivel de tu pokémon.\nb: Nivel de Pokémon salvaje.\n\nRatio de captura de 8 si (a / 4) > b\nRatio de captura de 4 si (a / 2) > b\nRatio de captura de 2 si a > b\n1 en otro caso'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1

            const data = await db.pokemon.findOne({ where: { select: true, trainerId: object.trainerId }, attributes: ['level'] })
            if(data) {
                if(Math.floor(data.level / 4) > object.pokemon.db.level) return 8
                if(Math.floor(data.level / 2) > object.pokemon.db.level) return 4
                if(data.level > object.pokemon.db.level) return 2
            }

            return 1
        }
    }
}

module.exports = new Item()