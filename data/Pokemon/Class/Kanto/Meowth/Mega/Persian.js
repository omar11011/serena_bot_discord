const Base = require('../Persian').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Persian'
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Acero,
        ]
        this.peso = 41
        this.altura = 1.2
        this.evolucion = []
        this.stats = {
            hp: 85,
            attack: 90,
            defense: 60,
            spattack: 60,
            spdefense: 80,
            speed: 125,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}