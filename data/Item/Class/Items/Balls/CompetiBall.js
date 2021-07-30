const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Competi Ball'
        this.precio = 75
        this.emoji = '<:competi_ball:733520437165948971>'
        this.descripcion = 'Ratio de captura de 1.5 para todos los Pokémon.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1

            return 1.5
        }
    }
}

module.exports = new Item()