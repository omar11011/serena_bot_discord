const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Scizorita'
        this.emoji = '<:scizorita:744687572097433712>'
    }
}

module.exports = new Mega()