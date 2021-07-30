const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Mina'
        this.titulo = 'Ganador en Gimnasio de Ciudad Canal'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Canal.'
    }
}

module.exports = new Medal()