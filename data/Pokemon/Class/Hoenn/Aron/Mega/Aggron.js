const Base = require('../Aggron').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Aggron'
        this.tipo = [
            Entidades.Tipo.Acero,
        ]
        this.peso = 395
        this.altura = 2.2
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 140,
            defense: 230,
            spattack: 60,
            spdefense: 80,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}