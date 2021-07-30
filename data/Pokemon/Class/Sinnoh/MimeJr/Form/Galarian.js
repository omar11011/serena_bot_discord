const Base = require('../MimeJr').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Mime Jr. de Galar'
        this.region = Entidades.Region.Galar
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Mr. Mime de Galar', 15),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}