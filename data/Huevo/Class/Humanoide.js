const Base = require('../Base')

class Humanoide extends Base {
    constructor() {
        super()

        this.nombre = 'Humanoide'
    }
}

module.exports = new Humanoide()