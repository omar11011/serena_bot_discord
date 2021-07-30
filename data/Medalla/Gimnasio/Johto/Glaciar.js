const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Glaciar'
        this.titulo = 'Ganador en Gimnasio de Ciudad Caoba'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Caoba.'
    }
}

module.exports = new Medal()