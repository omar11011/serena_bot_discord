const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Siniestro'
        this.titulo = 'Ganador en Gimnasio de Ciudad Crampón'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Crampón.'
    }
}

module.exports = new Medal()