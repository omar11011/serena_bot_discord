const Base = require('../Giratina').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Giratina Forma Origen'
        this.peso = 650
        this.altura = 6.9
        this.evolucion = []
        this.stats = {
            hp: 150,
            attack: 120,
            defense: 100,
            spattack: 120,
            spdefense: 100,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}