const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Latiasita'
        this.precio = 150000
        this.emoji = '<:latiasita:769464199809990676>'
    }
}

module.exports = new Mega()