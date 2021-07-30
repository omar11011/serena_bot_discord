const Base = require('./Fletchinder').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 663
        this.pokemon = 'Talonflame'
        this.peso = 24.5
        this.altura = 1.2
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 9],
            [move.get('picotazo'), 10],
            [move.get('azote'), 16],
            [move.get('ascuas'), 17],
            [move.get('viento cortante'), 27],
            [move.get('don natural'), 31],
            [move.get('nitrocarga'), 39],
            [move.get('acróbata'), 44],
            [move.get('ala de acero'), 60],
            [move.get('pájaro osado'), 64],
            [move.get('envite ígneo'), 69],
        ]
        this.stats = {
            hp: 78,
            attack: 81,
            defense: 71,
            spattack: 74,
            spdefense: 69,
            speed: 126,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}