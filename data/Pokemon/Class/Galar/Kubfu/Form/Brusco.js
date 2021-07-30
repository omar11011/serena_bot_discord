const Base = require('../Urshifu').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Urshifu Brusco'
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Urshifu Brusco Gigamax'),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}