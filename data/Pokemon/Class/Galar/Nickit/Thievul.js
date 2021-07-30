const Base = require('./Nickit').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 828
        this.pokemon = 'Thievul'
        this.peso = 19.9
        this.altura = 1.2
        this.evolucion = []
        this.captura = 127
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('ladrón'), 1],
            [move.get('paliza'), 1],
            [move.get('alarido'), 12],
            [move.get('buena baza'), 16],
            [move.get('golpe bajo'), 28],
            [move.get('tajo umbrío'), 34],
            [move.get('plumerazo'), 40],
            [move.get('juego sucio'), 46],
        ]
        this.stats = {
            hp: 70,
            attack: 58,
            defense: 58,
            spattack: 87,
            spdefense: 92,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}