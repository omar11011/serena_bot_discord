const Base = require('../Base')

class Verde extends Base {
    constructor() {
        super()

        this.nombre = 'Verde'
        this.hexadecimal = '#228B22'
    }
}

module.exports = new Verde()