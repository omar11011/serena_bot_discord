const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Gengarita'
        this.emoji = '<:gengarita:744687299794567219>'
    }
}

module.exports = new Mega()