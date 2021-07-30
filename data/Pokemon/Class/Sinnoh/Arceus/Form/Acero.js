const Base = require('../Arceus').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Arceus Tipo Acero'
        this.tipo = [
            Entidades.Tipo.Acero,
        ]
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arceus Tipo Acero', item.get('arceusita'))
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}