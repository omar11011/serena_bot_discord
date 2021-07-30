const Base = require('../Silvally').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Silvally Tipo Bicho'
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Silvally Tipo Bicho', item.get('silvallyta')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}