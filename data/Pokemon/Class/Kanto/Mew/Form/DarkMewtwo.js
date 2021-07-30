const Base = require('../Mewtwo').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Mewtwo Oscuro'
        this.tipo = [
            Entidades.Tipo.Oscuro,
            Entidades.Tipo.Psíquico,
        ]
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Mewtwo X Oscuro', item.get('mewtwoita x')),
            new Entidades.Evolucion.Mega('Mega Mewtwo Y Oscuro', item.get('mewtwoita y')),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('vigor oscuro'), 1],
            [move.get('confusión'), 1],
            [move.get('rapidez'), 8],
            [move.get('premonición'), 15],
            [move.get('carga oscura'), 36],
            [move.get('psíquico'), 57],
            [move.get('esfera aural'), 70],
            [move.get('fin oscuro'), 90],
            [move.get('onda mental'), 100],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}