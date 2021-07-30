const Base = require('../Koffing').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Koffing de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Hada,
        ]
        this.peso = 1
        this.altura = 0.6
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Weezing de Galar', 35)
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}