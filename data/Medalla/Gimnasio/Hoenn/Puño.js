const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Puño'
        this.titulo = 'Ganador en Gimnasio de Ciudad Azuliza'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Azuliza.'
    }
}

module.exports = new Medal()