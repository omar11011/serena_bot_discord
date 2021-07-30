const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Rapid Ball'
        this.precio = 200
        this.emoji = '<:rapid_ball:733515617159872625>'
        this.descripcion = 'Ratio de captura de 4 si la velocidad base del pokémon supera los 100 puntos, 1 en caso contrario.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1
            if(object.pokemon.speed >= 100) return 4

            return 1
        }
    }
}

module.exports = new Item()