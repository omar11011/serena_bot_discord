const Base = require('../Deerling').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Deerling Forma Verano'
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Sawsbuck Forma Verano', 34),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}