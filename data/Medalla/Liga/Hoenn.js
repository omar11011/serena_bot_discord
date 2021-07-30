const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Liga Regional de Hoenn'
        this.titulo = 'Campeón de Hoenn'
        this.descripcion = 'Medalla obtenida tras ganar la Liga Regional de Hoenn.'
    }
}

module.exports = new Medal()