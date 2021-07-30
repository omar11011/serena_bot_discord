const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Calor'
        this.titulo = 'Ganador en Gimnasio de Ciudad Lavacalda'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Lavacalda.'
    }
}

module.exports = new Medal()