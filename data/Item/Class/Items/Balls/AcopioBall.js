const Base = require('../../Tipos/Ball')
const db = require('../../../../../server/models')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Acopio Ball'
        this.precio = 175
        this.emoji = '<:acopio_ball:733515606082584626>'
        this.descripcion = 'Ratio de captura 3.5 si el entrenador ya ha atrapado una muestra del mismo Pokémon antes, 1 en caso contrario.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1
            
            const exist = await db.pokemon.findOne({ where: { pokemon: object.pokemon.db.pokemon, trainerId: object.trainerId }, attributes: ['id'] })
            if(exist) return 3.5

            return 1
        }
    }
}

module.exports = new Item()