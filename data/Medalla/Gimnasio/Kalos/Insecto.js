const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Insecto'
        this.titulo = 'Ganador en Gimnasio de Ciudad Novarte'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Novarte.'
    }
}

module.exports = new Medal()