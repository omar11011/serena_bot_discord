const Base = require('../Base')

class Negro extends Base {
    constructor() {
        super()

        this.nombre = 'Negro'
        this.hexadecimal = '#000000'
    }
}

module.exports = new Negro()