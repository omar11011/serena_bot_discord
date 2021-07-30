const Base = require('../Base')

class Montaña extends Base {
    constructor() {
        super()

        this.nombre = 'Montaña'
        this.descripcion = 'Son vistos en las zonas rocosas y altas cumbres, así como en cuevas y superficies.'
    }
}

module.exports = new Montaña()