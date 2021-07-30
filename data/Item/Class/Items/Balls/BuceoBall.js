const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Buceo Ball'
        this.precio = 150
        this.emoji = '<:buceo_ball:733515611027537986>'
        this.descripcion = 'Ratio de captura de 3 si el pokémon aparece en el agua, 1 en caso contrario.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1
            if(object.pokemon.habitat.includes('Agua Dulce') || object.pokemon.habitat.includes('Agua Salada')) return 3.5

            return 1
        }
    }
}

module.exports = new Item()