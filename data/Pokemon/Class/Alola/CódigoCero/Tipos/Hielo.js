const Base = require('../Silvally').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Silvally Tipo Hielo'
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Silvally Tipo Hielo', item.get('silvallyta')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}