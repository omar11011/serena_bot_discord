const Base = require('../Base')

class Bosque extends Base {
    constructor() {
        super()

        this.nombre = 'Bosque'
        this.descripcion = 'Son, en su mayoría, Pokémon de tipo bicho y planta. Viven en lugares un poco protegidos, por lo que suelen estar en lugares muy específicos, lo que no quiere decir que sean necesariamente raros.'
    }
}

module.exports = new Bosque()