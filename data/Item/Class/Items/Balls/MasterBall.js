const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Master Ball'
        this.precio = 75
        this.metodo = 'Gemas'
        this.emoji = '<:master_ball:733515615222104185>'
        this.descripcion = 'Ratio de captura de 255 con cualquier Pokémon.'
        this.vendible = false

        this.capture = async object => {
            return 400
        }
    }
}

module.exports = new Item()