const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Hielo'
        this.titulo = 'Ganador en Gimnasio de Ciudad Auriga'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Auriga.'
    }
}

module.exports = new Medal()