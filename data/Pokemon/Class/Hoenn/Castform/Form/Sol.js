const Base = require('../Castform').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Castform Forma Sol'
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.color = Entidades.Color.Rojo
        this.evolucion = []
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}