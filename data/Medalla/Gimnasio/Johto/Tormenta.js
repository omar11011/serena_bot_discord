const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Tormenta'
        this.titulo = 'Ganador en Gimnasio de Ciudad Orquídea'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Orquídea.'
    }
}

module.exports = new Medal()