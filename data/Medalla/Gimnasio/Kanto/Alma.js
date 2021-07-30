const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Alma'
        this.titulo = 'Ganador en Gimnasio de Ciudad Fucsia'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Fucsia.'
    }
}

module.exports = new Medal()