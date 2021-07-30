const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Lopunnita'
        this.emoji = '<:lopunnita:769464161460682832>'
    }
}

module.exports = new Mega()