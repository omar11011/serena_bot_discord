const Base = require('../Base')

class Galar extends Base {
    constructor() {
        super()

        this.nombre = 'Galar'
        this.generacion = 8
    }
}

module.exports = new Galar()