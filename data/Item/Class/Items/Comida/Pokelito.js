const Base = require('../../Tipos/Comida')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Pokelito'
        this.precio = 20
        this.emoji = '<:pokelito:742183135344722023>'
        this.descripcion = 'Incrementa la amistad de tu pokémon.'
    }
}

module.exports = new Item()