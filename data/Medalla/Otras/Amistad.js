const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.tipo = 'Otras'
        this.nombre = 'Cinta Amistad'
        this.titulo = 'Entrenador amistoso'
        this.descripcion = 'Alcanzar la máxima amistad con un pokémon.'
    }
}

module.exports = new Medal()