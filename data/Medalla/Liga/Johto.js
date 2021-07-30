const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Liga Regional de Johto'
        this.titulo = 'Campeón de Johto'
        this.descripcion = 'Medalla obtenida tras ganar la Liga Regional de Johto.'
    }
}

module.exports = new Medal()