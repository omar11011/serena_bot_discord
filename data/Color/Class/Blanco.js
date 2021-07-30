const Base = require('../Base')

class Blanco extends Base {
    constructor() {
        super()

        this.nombre = 'Blanco'
        this.hexadecimal = '#EEEEEE'
    }
}

module.exports = new Blanco()