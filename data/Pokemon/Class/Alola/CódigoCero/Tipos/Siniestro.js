const Base = require('../Silvally').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Silvally Tipo Siniestro'
        this.tipo = [
            Entidades.Tipo.Siniestro,
        ]
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Silvally Tipo Siniestro', item.get('silvallyta')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}