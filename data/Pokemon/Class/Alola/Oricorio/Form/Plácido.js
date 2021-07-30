const Base = require('../Oricorio').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Oricorio Plácido'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Volador,
        ]
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Item('Oricorio Apasionado', item.get('néctar rojo')),
            new Entidades.Evolucion.Item('Oricorio Animado', item.get('néctar amarillo')),
            new Entidades.Evolucion.Item('Oricorio Refinado', item.get('néctar violeta')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}