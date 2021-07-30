const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Necrosol'
        this.precio = 130000
        this.emoji = '<:solarizer:761525955533078549>'
        this.descripcion = 'Equípaselo a Solgaleo para que pueda cambiar a su forma Sol Naciente.'
    }
}

module.exports = new Item()