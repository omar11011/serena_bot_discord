const Base = require('../../Tipos/Comida')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Pokocho'
        this.precio = 20
        this.emoji = '<:pokocho:767829334035398716>'
        this.descripcion = 'Incrementa la amistad de tu pokémon.'
    }
}

module.exports = new Item()