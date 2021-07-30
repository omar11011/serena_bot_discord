const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Planta'
        this.titulo = 'Ganador en Gimnasio de Ciudad Hoyuelo'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Hoyuelo.'
    }
}

module.exports = new Medal()