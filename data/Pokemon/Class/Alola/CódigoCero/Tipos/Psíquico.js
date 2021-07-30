const Base = require('../Silvally').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Silvally Tipo Psíquico'
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Silvally Tipo Psíquico', item.get('silvallyta')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}