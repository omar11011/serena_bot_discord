const Base = require('../Form/DarkMewtwo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.redeem = false
        this.pokemon = 'Mega Mewtwo Y Oscuro'
        this.tipo = [
            Entidades.Tipo.Oscuro,
            Entidades.Tipo.Psíquico,
        ]
        this.peso = 33
        this.altura = 1.5
        this.evolucion = []
        this.stats = {
            hp: 106,
            attack: 150,
            defense: 70,
            spattack: 194,
            spdefense: 120,
            speed: 140,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}