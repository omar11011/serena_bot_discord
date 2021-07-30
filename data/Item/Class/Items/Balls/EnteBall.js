const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Ente Ball'
        this.precio = 75
        this.metodo = 'Gemas'
        this.emoji = '<:ente_ball:733515613795909684>'
        this.descripcion = 'Ratio de captura de 255 solo si el Pokémon salvaje es un Ultra Ente.'
        this.vendible = false

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 400

            return 0.1
        }
    }
}

module.exports = new Item()