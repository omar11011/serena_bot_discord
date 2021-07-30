const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Tierra'
        this.titulo = 'Ganador en Gimnasio de Ciudad Verde'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Verde.'
    }
}

module.exports = new Medal()