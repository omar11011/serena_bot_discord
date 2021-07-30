const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Muro'
        this.titulo = 'Ganador en Gimnasio de Ciudad Relieve'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Relieve.'
    }
}

module.exports = new Medal()