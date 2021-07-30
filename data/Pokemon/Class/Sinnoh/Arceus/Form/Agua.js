const Base = require('../Arceus').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Arceus Tipo Agua'
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arceus Tipo Agua', item.get('arceusita'))
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}