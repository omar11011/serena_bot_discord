const Base = require('./Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Liga Nacional'
        this.titulo = 'Campeón Nacional'
        this.descripcion = 'Medalla obtenida tras ganar la Liga Nacional.'
    }
}

module.exports = new Medal()