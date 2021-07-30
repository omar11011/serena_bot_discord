const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Abomasnowita'
        this.emoji = '<:abomasnowita:769464021501083698>'
    }
}

module.exports = new Mega()