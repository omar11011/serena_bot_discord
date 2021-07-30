const Base = require('../Arceus').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Arceus Tipo Planta'
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arceus Tipo Planta', item.get('arceusita'))
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}