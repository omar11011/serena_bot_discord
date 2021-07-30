const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Super League'
        this.titulo = 'Campeón de Super League'
        this.descripcion = 'Medalla obtenida tras ganar la Super League.'
    }
}

module.exports = new Medal()