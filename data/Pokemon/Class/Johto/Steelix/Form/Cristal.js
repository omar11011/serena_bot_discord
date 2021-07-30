const Base = require('../Steelix').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Steelix de Cristal'
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Steelix de Cristal', item.get('steelixita'))
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}