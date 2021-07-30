const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Lignito'
        this.titulo = 'Ganador en Gimnasio de Ciudad Pirita'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Pirita.'
    }
}

module.exports = new Medal()