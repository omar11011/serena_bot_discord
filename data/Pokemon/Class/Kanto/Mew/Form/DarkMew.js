const Base = require('../Mew').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Mew Oscuro'
        this.tipo = [
            Entidades.Tipo.Oscuro,
            Entidades.Tipo.Psíquico,
        ]
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('mega puño'), 10],
            [move.get('onda oscura'), 20],
            [move.get('psíquico'), 30],
            [move.get('rabia oscura'), 50],
            [move.get('fin oscuro'), 90],
            [move.get('esfera aural'), 100],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}