const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Latiosita'
        this.precio = 150000
        this.emoji = '<:latiosita:769464218801012737>'
    }
}

module.exports = new Mega()