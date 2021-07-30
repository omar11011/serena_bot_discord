const Base = require('./Mienfoo').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 620
        this.pokemon = 'Mienshao'
        this.peso = 35.5
        this.altura = 1.4
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('sorpresa'), 13],
            [move.get('doble bofetón'), 17],
            [move.get('rapidez'), 21],
            [move.get('palmeo'), 29],
            [move.get('puño drenaje'), 33],
            [move.get('patada salto'), 37],
            [move.get('bote'), 49],
            [move.get('patada salto alta'), 56],
            [move.get('inversión'), 63],
            [move.get('esfera aural'), 70],
        ]
        this.stats = {
            hp: 65,
            attack: 125,
            defense: 60,
            spattack: 95,
            spdefense: 60,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}