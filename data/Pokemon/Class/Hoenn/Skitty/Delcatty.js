const Base = require('./Skitty').class
const Entidades = require('../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 301
        this.pokemon = 'Delcatty'
        this.peso = 32.6
        this.altura = 1.1
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 60
        this.amistad = 70
        this.stats = {
            hp: 70,
            attack: 65,
            defense: 65,
            spattack: 55,
            spdefense: 55,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}