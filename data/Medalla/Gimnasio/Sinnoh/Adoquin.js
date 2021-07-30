const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Adoquín'
        this.titulo = 'Ganador en Gimnasio de Ciudad Rocavelo'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Rocavelo.'
    }
}

module.exports = new Medal()