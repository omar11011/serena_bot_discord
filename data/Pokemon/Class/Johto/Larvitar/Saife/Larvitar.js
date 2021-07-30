const Base = require('../Larvitar').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Larvitar de Saife'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Fuego,
        ]
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Pupitar de Saife', 30),
        ]
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('guardia baja'), 14],
            [move.get('avalancha'), 19],
            [move.get('golpe'), 28],
            [move.get('pulso umbrío'), 32],
            [move.get('vendetta'), 37],
            [move.get('triturar'), 41],
            [move.get('lluvia ígnea'), 46],
            [move.get('roca afilada'), 50],
            [move.get('hiperrayo'), 55],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}