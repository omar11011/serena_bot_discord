const Base = require('../Arceus').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Arceus Tipo Hada'
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arceus Tipo Hada', item.get('arceusita'))
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}