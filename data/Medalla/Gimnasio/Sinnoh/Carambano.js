const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Carámbano'
        this.titulo = 'Ganador en Gimnasio de Ciudad Puntanueva'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Puntanueva.'
    }
}

module.exports = new Medal()