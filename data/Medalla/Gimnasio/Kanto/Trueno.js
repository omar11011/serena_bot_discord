const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Trueno'
        this.titulo = 'Ganador en Gimnasio de Ciudad Carmín'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Carmín.'
    }
}

module.exports = new Medal()