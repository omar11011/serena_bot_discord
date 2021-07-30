const Base = require('../Sentret').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Sentret de Saife'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Furret de Saife', 15),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('voz cautivadora'), 1],
            [move.get('ataque rápido'), 7],
            [move.get('golpes furia'), 13],
            [move.get('atizar'), 25],
            [move.get('carantoña'), 31],
            [move.get('vozarrón'), 47],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}