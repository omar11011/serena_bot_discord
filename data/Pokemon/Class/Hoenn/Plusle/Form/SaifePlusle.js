const Base = require('../Plusle').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Plusle de Saife'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Hada,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.color = Entidades.Color.Rosa
        this.movimientos = [
            [move.get('viento feérico'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('chispa'), 7],
            [move.get('beso drenaje'), 16],
            [move.get('bola voltio'), 19],
            [move.get('chispazo'), 31],
            [move.get('fuerza lunar'), 40],
            [move.get('trueno'), 43],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}