const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Pluma'
        this.titulo = 'Ganador en Gimnasio de Ciudad Arborada'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Arborada.'
    }
}

module.exports = new Medal()