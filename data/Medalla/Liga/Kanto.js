const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Liga Regional de Kanto'
        this.titulo = 'Campeón de Kanto'
        this.descripcion = 'Medalla obtenida tras ganar la Liga Regional de Kanto.'
    }
}

module.exports = new Medal()