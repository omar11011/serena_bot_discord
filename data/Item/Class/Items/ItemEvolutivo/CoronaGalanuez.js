const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Corona Galanuez'
        this.emoji = '<:galarwreath:776077716477706250>'
        this.descripcion = 'Equípaselo a Galarian Slowpoke para que pueda evolucionar en Galarian Slowking.'
    }
}

module.exports = new Item()