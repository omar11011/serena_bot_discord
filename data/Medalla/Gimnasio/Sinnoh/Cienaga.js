const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Ciénaga'
        this.titulo = 'Ganador en Gimnasio de Ciudad Pradera'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Pradera.'
    }
}

module.exports = new Medal()