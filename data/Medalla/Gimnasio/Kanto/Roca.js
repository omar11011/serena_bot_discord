const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Roca'
        this.titulo = 'Ganador en Gimnasio de Ciudad Plateada'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Plateada.'
    }
}

module.exports = new Medal()