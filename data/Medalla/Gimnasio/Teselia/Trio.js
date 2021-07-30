const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Trío'
        this.titulo = 'Ganador en Gimnasio de Ciudad Gres'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Gres.'
    }
}

module.exports = new Medal()