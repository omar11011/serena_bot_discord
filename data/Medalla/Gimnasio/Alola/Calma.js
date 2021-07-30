const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Calma'
        this.titulo = 'Ganador en Gimnasio de Ciudad Konikoni'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Konikoni.'
    }
}

module.exports = new Medal()