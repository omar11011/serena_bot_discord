const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Arcoíris'
        this.titulo = 'Ganador en Gimnasio de Ciudad Azulona'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Azulona.'
    }
}

module.exports = new Medal()