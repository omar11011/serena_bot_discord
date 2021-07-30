const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Liga Regional de Kalos'
        this.titulo = 'Campeón de Kalos'
        this.descripcion = 'Medalla obtenida tras ganar la Liga Regional de Kalos.'
    }
}

module.exports = new Medal()