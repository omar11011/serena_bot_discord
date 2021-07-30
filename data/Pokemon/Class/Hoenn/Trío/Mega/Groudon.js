const Base = require('../Groudon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Groudon Primigenio'
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Fuego,
        ]
        this.peso = 997.5
        this.altura = 5
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 180,
            defense: 160,
            spattack: 150,
            spdefense: 90,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}