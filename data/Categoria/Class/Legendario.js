const Base = require('../Base')

class Legendario extends Base {
    constructor() {
        super()

        this.nombre = 'Legendario'
    }
}

module.exports = new Legendario()