const Base = require('../Base')

class Pradera extends Base {
    constructor() {
        super()

        this.nombre = 'Pradera'
        this.descripcion = 'Se encuentran en la hierba alta de las rutas.'
    }
}

module.exports = new Pradera()