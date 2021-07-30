const Base = require('../Base')

class Rojo extends Base {
    constructor() {
        super()

        this.nombre = 'Rojo'
        this.hexadecimal = '#FF6347'
    }
}

module.exports = new Rojo()