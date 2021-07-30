const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Cebo Ball'
        this.precio = 175
        this.emoji = '<:cebo_ball:733515612512321626>'
        this.descripcion = 'Ratio de captura de 3.5 si el tipo de pokémon incluye Agua, 1 en caso contrario.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1
            if(object.pokemon.tipo.includes('Agua')) return 5

            return 1
        }
    }
}

module.exports = new Item()