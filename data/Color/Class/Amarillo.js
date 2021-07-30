const Base = require('../Base')

class Amarillo extends Base {
    constructor() {
        super()

        this.nombre = 'Amarillo'
        this.hexadecimal = '#FFD700'
    }
}

module.exports = new Amarillo()