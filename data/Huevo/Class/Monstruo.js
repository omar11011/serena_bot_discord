const Base = require('../Base')

class Monstruo extends Base {
    constructor() {
        super()

        this.nombre = 'Monstruo'
    }
}

module.exports = new Monstruo()