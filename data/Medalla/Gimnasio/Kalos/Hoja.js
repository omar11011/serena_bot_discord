const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Hoja'
        this.titulo = 'Ganador en Gimnasio de Ciudad Témpera'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Témpera.'
    }
}

module.exports = new Medal()