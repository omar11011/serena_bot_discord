const Base = require('../Raticate').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Raticate de Alola'
        this.peso = 25.5
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Raticate de Alola', item.get('raticatita')),
        ]
        this.stats = {
            hp: 75,
            attack: 71,
            defense: 70,
            spattack: 40,
            spdefense: 80,
            speed: 77,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}