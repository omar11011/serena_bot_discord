const Base = require('./Gossifleur').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 830
        this.pokemon = 'Eldegoss'
        this.peso = 2.5
        this.altura = 0.5
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('follaje'), 1],
            [move.get('giro rápido'), 4],
            [move.get('hoja afilada'), 12],
            [move.get('canon'), 16],
            [move.get('ciclón de hojas'), 23],
            [move.get('vozarrón'), 34],
            [move.get('lluevehojas'), 46],
        ]
        this.stats = {
            hp: 60,
            attack: 70,
            defense: 90,
            spattack: 80,
            spdefense: 120,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}