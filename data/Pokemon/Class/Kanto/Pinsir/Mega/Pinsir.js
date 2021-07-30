const Base = require('../Pinsir').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Pinsir'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.peso = 59
        this.altura = 1.7
        this.evolucion = []
        this.stats = {
            hp: 65,
            attack: 155,
            defense: 130,
            spattack: 65,
            spdefense: 95,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}