const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Voltio'
        this.titulo = 'Ganador en Gimnasio de Ciudad Mayólica'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Mayólica.'
    }
}

module.exports = new Medal()