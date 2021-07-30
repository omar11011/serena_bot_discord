const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Gloria Ball'
        this.precio = 50
        this.emoji = '<:gloria_ball:733515613485662329>'
        this.descripcion = 'Ratio de captura de 1 para todos los Pokémon.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1

            return 1
        }
    }
}

module.exports = new Item()