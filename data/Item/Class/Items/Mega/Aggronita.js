const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Aggronita'
        this.emoji = '<:aggronita:744689541511905451>'
    }
}

module.exports = new Mega()