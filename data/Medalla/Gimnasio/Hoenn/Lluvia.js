const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Lluvia'
        this.titulo = 'Ganador en Gimnasio de Ciudad Arrecípolis'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Arrecípolis.'
    }
}

module.exports = new Medal()