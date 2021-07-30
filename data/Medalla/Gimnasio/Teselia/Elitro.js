const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Elitro'
        this.titulo = 'Ganador en Gimnasio de Ciudad Porcelana'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Porcelana.'
    }
}

module.exports = new Medal()