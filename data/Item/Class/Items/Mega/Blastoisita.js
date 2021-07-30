const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Blastoisita'
        this.emoji = '<:blastoisita:732377701305942077>'
    }
}

module.exports = new Mega()