const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Liga Regional de Alola'
        this.titulo = 'Campeón de Alola'
        this.descripcion = 'Medalla obtenida tras ganar la Liga Regional de Alola.'
    }
}

module.exports = new Medal()