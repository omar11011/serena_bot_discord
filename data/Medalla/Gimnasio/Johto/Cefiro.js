const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Céfiro'
        this.titulo = 'Ganador en Gimnasio de Ciudad Malva'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Malva.'
    }
}

module.exports = new Medal()