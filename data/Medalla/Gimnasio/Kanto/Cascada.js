const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Cascada'
        this.titulo = 'Ganador en Gimnasio de Ciudad Celeste'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Celeste.'
    }
}

module.exports = new Medal()