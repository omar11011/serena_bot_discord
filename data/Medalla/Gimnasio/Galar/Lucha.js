const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Lucha'
        this.titulo = 'Ganador en Gimnasio de Ciudad Ladera 2'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Ladera 2.'
    }
}

module.exports = new Medal()