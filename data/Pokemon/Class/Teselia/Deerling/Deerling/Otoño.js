const Base = require('../Deerling').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Deerling Forma Otoño'
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Sawsbuck Forma Otoño', 34),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}