const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Mente'
        this.titulo = 'Ganador en Gimnasio de Ciudad Algaria'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Algaria.'
    }
}

module.exports = new Medal()