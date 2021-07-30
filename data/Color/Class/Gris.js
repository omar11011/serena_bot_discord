const Base = require('../Base')

class Gris extends Base {
    constructor() {
        super()

        this.nombre = 'Gris'
        this.hexadecimal = '#696969'
    }
}

module.exports = new Gris()