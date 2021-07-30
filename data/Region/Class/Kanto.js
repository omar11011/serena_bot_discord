const Base = require('../Base')

class Kanto extends Base {
    constructor() {
        super()

        this.nombre = 'Kanto'
        this.generacion = 1
    }
}

module.exports = new Kanto()