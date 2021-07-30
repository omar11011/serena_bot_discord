const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Base'
        this.titulo = 'Ganador en Gimnasio de Ciudad Esmalte'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Esmalte.'
    }
}

module.exports = new Medal()