const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Galladita'
        this.emoji = '<:galladita:769463736066244608>'
    }
}

module.exports = new Mega()