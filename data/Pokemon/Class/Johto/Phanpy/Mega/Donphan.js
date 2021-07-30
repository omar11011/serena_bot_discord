const Base = require('../Donphan').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Donphan'
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Acero,
        ]
        this.peso = 150
        this.altura = 1.5
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 150,
            defense: 160,
            spattack: 60,
            spdefense: 80,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}