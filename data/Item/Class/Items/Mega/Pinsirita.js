const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Pinsirita'
        this.emoji = '<:pinsirita:744687558411157624>'
    }
}

module.exports = new Mega()