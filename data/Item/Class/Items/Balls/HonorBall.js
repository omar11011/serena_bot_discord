const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Honor Ball'
        this.precio = 50
        this.emoji = '<:honor_ball:733515614492033055>'
        this.descripcion = 'Ratio de captura de 1 para todos los Pokémon.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1

            return 1
        }
    }
}

module.exports = new Item()