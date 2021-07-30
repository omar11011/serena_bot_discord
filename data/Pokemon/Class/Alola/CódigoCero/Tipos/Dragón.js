const Base = require('../Silvally').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Silvally Tipo Dragón'
        this.tipo = [
            Entidades.Tipo.Dragón,
        ]
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Silvally Tipo Dragón', item.get('silvallyta')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}