const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Dínamo'
        this.titulo = 'Ganador en Gimnasio de Ciudad Malvalona'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Malvalona.'
    }
}

module.exports = new Medal()