const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Liga Regional de Teselia'
        this.titulo = 'Campeón de Teselia'
        this.descripcion = 'Medalla obtenida tras ganar la Liga Regional de Teselia.'
    }
}

module.exports = new Medal()