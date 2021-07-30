const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Faro'
        this.titulo = 'Ganador en Gimnasio de Ciudad Marina'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Marina.'
    }
}

module.exports = new Medal()