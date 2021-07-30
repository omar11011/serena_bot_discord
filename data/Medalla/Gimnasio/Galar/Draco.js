const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Draco'
        this.titulo = 'Ganador en Gimnasio de Ciudad Artejo'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Artejo.'
    }
}

module.exports = new Medal()