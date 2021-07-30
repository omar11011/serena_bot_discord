const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Planicie'
        this.titulo = 'Ganador en Gimnasio de Ciudad Trigal'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Trigal.'
    }
}

module.exports = new Medal()