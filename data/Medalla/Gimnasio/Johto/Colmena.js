const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Colmena'
        this.titulo = 'Ganador en Gimnasio de Ciudad Azalea'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Azalea.'
    }
}

module.exports = new Medal()