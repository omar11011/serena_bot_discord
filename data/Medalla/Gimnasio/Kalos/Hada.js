const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Hada'
        this.titulo = 'Ganador en Gimnasio de Ciudad Romantis'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Romantis.'
    }
}

module.exports = new Medal()