const Base = require('../Base')

class Ciudad extends Base {
    constructor() {
        super()

        this.nombre = 'Ciudad'
        this.descripcion = 'Son Pokémon domesticados o que viven en las ciudades, por lo que ninguno de ellos es legendario.'
    }
}

module.exports = new Ciudad()