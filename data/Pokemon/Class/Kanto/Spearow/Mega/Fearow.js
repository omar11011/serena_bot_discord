const Base = require('../Fearow').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Fearow'
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Volador,
        ]
        this.peso = 55
        this.altura = 2.2
        this.evolucion = []
        this.stats = {
            hp: 85,
            attack: 70,
            defense: 95,
            spattack: 91,
            spdefense: 61,
            speed: 140,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}