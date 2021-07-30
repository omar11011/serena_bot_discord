const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Lid'
        this.titulo = 'Ganador en Gimnasio de Ciudad Yantra'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Yantra.'
    }
}

module.exports = new Medal()