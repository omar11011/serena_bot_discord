const Base = require('../Castform').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Castform Forma Nieve'
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.color = Entidades.Color.Blanco
        this.evolucion = []
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}