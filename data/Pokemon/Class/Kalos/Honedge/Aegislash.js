const Base = require('./Doublade').class
const Entidades = require('../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 681
        this.pokemon = 'Aegislash'
        this.peso = 53
        this.altura = 1.7
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Aegislash Forma Escudo'),
        ]
        this.captura = 45
        this.stats = {
            hp: 60,
            attack: 140,
            defense: 50,
            spattack: 140,
            spdefense: 50,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}