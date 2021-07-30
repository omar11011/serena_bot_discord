const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Liga Regional de Sinnoh'
        this.titulo = 'Campeón de Sinnoh'
        this.descripcion = 'Medalla obtenida tras ganar la Liga Regional de Sinnoh.'
    }
}

module.exports = new Medal()