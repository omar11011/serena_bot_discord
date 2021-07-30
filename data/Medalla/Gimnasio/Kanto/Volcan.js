const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Volcán'
        this.titulo = 'Ganador en Gimnasio de Ciudad Canela'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Canela.'
    }
}

module.exports = new Medal()