const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Dragón'
        this.titulo = 'Ganador en Gimnasio de Ciudad Endrino'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Endrino.'
    }
}

module.exports = new Medal()