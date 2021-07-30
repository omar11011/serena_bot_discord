const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Iceberg'
        this.titulo = 'Ganador en Gimnasio de Ciudad Fractal'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Fractal.'
    }
}

module.exports = new Medal()