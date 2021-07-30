const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Honra'
        this.titulo = 'Ganador en Gimnasio de Ciudad Ohana'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Ohana.'
    }
}

module.exports = new Medal()