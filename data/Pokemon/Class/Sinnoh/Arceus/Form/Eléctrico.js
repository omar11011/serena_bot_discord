const Base = require('../Arceus').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Arceus Tipo Eléctrico'
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arceus Tipo Eléctrico', item.get('arceusita'))
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}