const Base = require('../Sceptile').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Sceptile'
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Dragón,
        ]
        this.peso = 55.2
        this.altura = 1.9
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 110,
            defense: 75,
            spattack: 145,
            spdefense: 85,
            speed: 145,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}