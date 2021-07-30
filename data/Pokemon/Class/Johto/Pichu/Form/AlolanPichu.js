const Base = require('../Pichu').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Pichu de Alola'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Psíquico,
        ]
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Pikachu de Alola'),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}