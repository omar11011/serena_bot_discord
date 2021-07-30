const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Liga Regional de Galar'
        this.titulo = 'Campeón de Galar'
        this.descripcion = 'Medalla obtenida tras ganar la Liga Regional de Galar.'
    }
}

module.exports = new Medal()