const Base = require('./Lillipup').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 507
        this.pokemon = 'Herdier'
        this.peso = 14.7
        this.altura = 0.9
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Stoutland', 32),
        ]
        this.color = Entidades.Color.Gris
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 8],
            [move.get('derribo'), 15],
            [move.get('triturar'), 24],
            [move.get('represalia'), 33],
            [move.get('inversión'), 38],
            [move.get('última baza'), 42],
            [move.get('giga impacto'), 47],
            [move.get('carantoña'), 52],
        ]
        this.stats = {
            hp: 65,
            attack: 80,
            defense: 65,
            spattack: 35,
            spdefense: 65,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}