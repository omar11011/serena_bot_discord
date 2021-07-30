const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Temblor'
        this.titulo = 'Ganador en Gimnasio de Ciudad Fayenza'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Fayenza.'
    }
}

module.exports = new Medal()