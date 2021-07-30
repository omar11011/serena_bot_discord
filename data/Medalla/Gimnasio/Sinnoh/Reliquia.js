const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Reliquia'
        this.titulo = 'Ganador en Gimnasio de Ciudad Corazón'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Corazón.'
    }
}

module.exports = new Medal()