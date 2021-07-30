const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Piedra'
        this.titulo = 'Ganador en Gimnasio de Ciudad Feérica'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Feérica.'
    }
}

module.exports = new Medal()