const Base = require('../Arceus').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Arceus Tipo Fuego'
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arceus Tipo Fuego', item.get('arceusita'))
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}