const Base = require('../Zacian').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Zacian Espada Suprema'
        this.tipo = [
            Entidades.Tipo.Hada,
            Entidades.Tipo.Acero,
        ]
        this.peso = 355
        this.evolucion = []
        this.stats = {
            hp: 92,
            attack: 170,
            defense: 115,
            spattack: 80,
            spdefense: 115,
            speed: 148,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}