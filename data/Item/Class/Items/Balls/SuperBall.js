const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Super Ball'
        this.precio = 75
        this.emoji = '<:super_ball:733515618082357329>'
        this.descripcion = 'Ratio de captura de 1.5 para todos los Pokémon.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1

            return 1.5
        }
    }
}

module.exports = new Item()