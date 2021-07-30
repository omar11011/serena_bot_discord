const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Fantasma'
        this.titulo = 'Ganador en Gimnasio de Ciudad Ladera 1'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Ladera 1.'
    }
}

module.exports = new Medal()