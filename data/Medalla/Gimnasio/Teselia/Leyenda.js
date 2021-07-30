const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Leyenda'
        this.titulo = 'Ganador en Gimnasio de Ciudad Caolín'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Caolín.'
    }
}

module.exports = new Medal()