const Base = require('../Mewtwo').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mewtwo Acorazado'
        this.peso = 140
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Mewtwo X', item.get('mewtwoita x')),
            new Entidades.Evolucion.Mega('Mega Mewtwo Y', item.get('mewtwoita y')),
        ]
        this.stats = {
            hp: 106,
            attack: 120,
            defense: 120,
            spattack: 154,
            spdefense: 120,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}