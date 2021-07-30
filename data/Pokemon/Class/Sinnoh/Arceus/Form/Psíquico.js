const Base = require('../Arceus').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Arceus Tipo Psíquico'
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arceus Tipo Psíquico', item.get('arceusita'))
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}