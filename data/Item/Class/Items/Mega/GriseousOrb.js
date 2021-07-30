const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Orbe Amarillo'
        this.precio = 175000
        this.emoji = '<:griseous_orb:769465604721213450>'
    }
}

module.exports = new Mega()