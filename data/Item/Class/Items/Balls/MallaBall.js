const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Malla Ball'
        this.precio = 175
        this.emoji = '<:malla_ball:733515614848548964>'
        this.descripcion = 'Ratio de captura de 3.5 si el tipo de Pokémon incluye Agua o Bicho, 1 en caso contrario.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1
            if(object.pokemon.tipo.includes('Agua') || object.pokemon.tipo.includes('Bicho')) return 3.5

            return 1
        }
    }
}

module.exports = new Item()