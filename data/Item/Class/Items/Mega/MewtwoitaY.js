const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Mewtwoita Y'
        this.precio = 150000
        this.emoji = '<:mewtwoita_y:744688339592151062>'
    }
}

module.exports = new Mega()