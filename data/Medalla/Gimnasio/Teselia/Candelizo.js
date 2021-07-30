const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Candelizo'
        this.titulo = 'Ganador en Gimnasio de Ciudad Teja'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Teja.'
    }
}

module.exports = new Medal()