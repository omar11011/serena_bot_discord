const Base = require('../Silvally').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Silvally Tipo Fuego'
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Silvally Tipo Fuego', item.get('silvallyta')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}