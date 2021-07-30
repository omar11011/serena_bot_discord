const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Garra Afilada'
        this.emoji = '<:razor_claw:744677338842791936>'
        this.descripcion = 'Equípaselo a Sneasel por la noche para que pueda evolucionar en Weavile.'
    }
}

module.exports = new Item()