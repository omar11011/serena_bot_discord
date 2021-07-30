const Base = require('../Oricorio').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Oricorio Refinado'
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Volador,
        ]
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Item('Oricorio Apasionado', item.get('néctar rojo')),
            new Entidades.Evolucion.Item('Oricorio Animado', item.get('néctar amarillo')),
            new Entidades.Evolucion.Item('Oricorio Plácido', item.get('néctar rosa')),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}