const Base = require('../Base')

class Bicho extends Base {
    constructor() {
        super()

        this.nombre = 'Bicho'
    }
}

module.exports = new Bicho()