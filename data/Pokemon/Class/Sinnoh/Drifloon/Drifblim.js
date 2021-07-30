const Base = require('./Drifloon').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 426
        this.pokemon = 'Drifblim'
        this.peso = 15
        this.altura = 1.2
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('restricción'), 1],
            [move.get('impresionar'), 4],
            [move.get('tornado'), 8],
            [move.get('vendetta'), 16],
            [move.get('viento aciago'), 20],
            [move.get('infortunio'), 27],
            [move.get('escupir'), 34],
            [move.get('bola sombra'), 40],
            [move.get('golpe fantasma'), 65],
        ]
        this.stats = {
            hp: 150,
            attack: 80,
            defense: 44,
            spattack: 90,
            spdefense: 54,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}