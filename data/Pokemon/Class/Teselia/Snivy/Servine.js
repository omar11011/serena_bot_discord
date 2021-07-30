const Base = require('./Snivy').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 496
        this.pokemon = 'Servine'
        this.peso = 16
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Serperior', 36),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 7],
            [move.get('constricción'), 10],
            [move.get('ciclón de hojas'), 16],
            [move.get('megaagotar'), 24],
            [move.get('atizar'), 28],
            [move.get('hoja aguda'), 32],
            [move.get('gigadrenado'), 40],
            [move.get('estrujón'), 44],
            [move.get('lluevehojas'), 52],
        ]
        this.stats = {
            hp: 60,
            attack: 60,
            defense: 75,
            spattack: 60,
            spdefense: 75,
            speed: 83,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}