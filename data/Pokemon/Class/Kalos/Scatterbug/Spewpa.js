const Base = require('./Scatterbug').class
const Entidades = require('../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 665
        this.pokemon = 'Spewpa'
        this.peso = 8.4
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Vivillon', 12),
        ]
        this.captura = 120
        this.stats = {
            hp: 45,
            attack: 22,
            defense: 60,
            spattack: 27,
            spdefense: 30,
            speed: 29,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}