const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Diancita'
        this.precio = 150000
        this.emoji = '<:diancita:769463724808601620>'
    }
}

module.exports = new Mega()