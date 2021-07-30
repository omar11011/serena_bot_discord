const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Venusaurita'
        this.emoji = '<:venusaurita:732377701922504775>'
    }
}

module.exports = new Mega()