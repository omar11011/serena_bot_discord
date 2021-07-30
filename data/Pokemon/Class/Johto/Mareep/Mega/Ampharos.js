const Base = require('../Ampharos').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Ampharos'
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Dragón,
        ]
        this.evolucion = []
        this.captura = 120
        this.stats = {
            hp: 90,
            attack: 95,
            defense: 105,
            spattack: 165,
            spdefense: 110,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}