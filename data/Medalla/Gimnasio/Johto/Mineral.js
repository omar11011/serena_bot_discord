const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Mineral'
        this.titulo = 'Ganador en Gimnasio de Ciudad Olivo'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Olivo.'
    }
}

module.exports = new Medal()