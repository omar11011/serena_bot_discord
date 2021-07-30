const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Ocaso Ball'
        this.precio = 175
        this.emoji = '<:ocaso_ball:733515617247952908>'
        this.descripcion = 'Ratio de captura de 3.5 si el pokémon aparece en una cueva, 1 en caso contrario.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1
            if(object.pokemon.habitat.includes('Cueva')) return 3.5

            return 1
        }
    }
}

module.exports = new Item()