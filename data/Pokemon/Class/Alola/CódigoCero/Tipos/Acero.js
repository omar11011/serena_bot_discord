const Base = require('../Silvally').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Silvally Tipo Acero'
        this.tipo = [
            Entidades.Tipo.Acero,
        ]
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Silvally Tipo Acero', item.get('silvallyta')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}