const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Equilibrio'
        this.titulo = 'Ganador en Gimnasio de Ciudad Petalia'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Petalia.'
    }
}

module.exports = new Medal()