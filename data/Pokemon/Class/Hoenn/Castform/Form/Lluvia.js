const Base = require('../Castform').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Castform Forma Lluvia'
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.color = Entidades.Color.Azul
        this.evolucion = []
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}