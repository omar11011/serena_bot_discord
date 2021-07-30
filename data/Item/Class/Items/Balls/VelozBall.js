const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Veloz Ball'
        this.precio = 250
        this.emoji = '<:veloz_ball:733515617956790273>'
        this.descripcion = 'Ratio de captura de 5 para todos los Pokémon.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1

            return 5
        }
    }
}

module.exports = new Item()