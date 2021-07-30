const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Agua'
        this.titulo = 'Ganador en Gimnasio de Ciudad Amura'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Amura.'
    }
}

module.exports = new Medal()