const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Bosque'
        this.titulo = 'Ganador en Gimnasio de Ciudad Vetusta'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Vetusta.'
    }
}

module.exports = new Medal()