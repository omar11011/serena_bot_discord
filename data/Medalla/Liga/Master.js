const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Master League'
        this.titulo = 'Campeón de Master League'
        this.descripcion = 'Medalla obtenida tras ganar la Master League.'
    }
}

module.exports = new Medal()