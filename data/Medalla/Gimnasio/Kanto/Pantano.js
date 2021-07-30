const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Pantano'
        this.titulo = 'Ganador en Gimnasio de Ciudad Azafrán'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Azafrán.'
    }
}

module.exports = new Medal()