const Base = require('../../Tipos/Ball')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Amor Ball'
        this.precio = 400
        this.emoji = '<:amor_ball:733515606875308112>'
        this.descripcion = 'Ratio de captura de 8 si el Pokémon salvaje es de la misma especie que el Pokémon del entrenador pero de un género diferente, 1 en caso contrario.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1

            const data = await db.pokemon.findOne({ where: { select: 1, trainerId: object.trainerId }, attributes: ['pokemon', 'gender'] })

            if(data && object.pokemon.db.pokemon == data.pokemon) {
                if((object.pokemon.db.gender == 'Macho' && object.pokemon.db.gender == 'Hembra') || (object.pokemon.db.gender == 'Hembra' && object.pokemon.db.gender == 'Macho')) return 8
            }

            return 1
        }
    }
}

module.exports = new Item()