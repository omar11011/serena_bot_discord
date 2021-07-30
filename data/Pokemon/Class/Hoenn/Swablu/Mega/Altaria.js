const Base = require('../Altaria').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Altaria'
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Hada,
        ]
        this.peso = 20.6
        this.altura = 1.5
        this.evolucion = []
        this.stats = {
            hp: 75,
            attack: 110,
            defense: 110,
            spattack: 110,
            spdefense: 105,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}