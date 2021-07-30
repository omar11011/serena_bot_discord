const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Garchompita'
        this.emoji = '<:garchompita:769463748678254653>'
    }
}

module.exports = new Mega()