const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Nido Ball'
        this.precio = 50
        this.emoji = '<:nido_ball:733518670453538888>'
        this.descripcion = 'Ratio de captura de 1 si el nivel del Pokémon es menor a 30, de lo contrario sigue la fórmula: R = (41 - level) / 10'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1
            if(object.pokemon.db.level < 30) return 1

            return (41 - object.pokemon.db.level) / 10
        }
    }
}

module.exports = new Item()