const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Colmillo Agudo'
        this.emoji = '<:razor_fang:744677339283062834>'
        this.descripcion = 'Equípaselo a Gligar por la noche para que pueda evolucionar en Gliscor.'
    }
}

module.exports = new Item()