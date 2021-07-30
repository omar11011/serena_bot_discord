const Base = require('../Arceus').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Arceus Tipo Veneno'
        this.tipo = [
            Entidades.Tipo.Veneno,
        ]
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arceus Tipo Veneno', item.get('arceusita'))
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}