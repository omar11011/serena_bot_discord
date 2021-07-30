const Base = require('../Onix').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Onix de Cristal'
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Steelix de Cristal', item.get('revestimiento metálico')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}