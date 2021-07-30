const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Turno Ball'
        this.precio = 150
        this.emoji = '<:turno_ball:733515618015510579>'
        this.descripcion = 'Ratio de captura de 1 para todos los Pokémon.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1

            return 3
        }
    }
}

module.exports = new Item()