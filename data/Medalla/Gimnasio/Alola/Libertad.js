const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Libertad'
        this.titulo = 'Ganador en Gimnasio de Ciudad Hauoli'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Hauoli.'
    }
}

module.exports = new Medal()