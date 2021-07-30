const Base = require('../Silvally').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Silvally Tipo Lucha'
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Silvally Tipo Lucha', item.get('silvallyta')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}