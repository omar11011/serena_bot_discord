const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Voltaje'
        this.titulo = 'Ganador en Gimnasio de Ciudad Luminalia'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Luminalia.'
    }
}

module.exports = new Medal()