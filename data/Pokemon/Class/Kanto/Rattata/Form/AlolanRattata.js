const Base = require('../Rattata').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Rattata de Alola'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Normal,
        ]
        this.peso = 3.8
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Raticate de Alola', 20),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}