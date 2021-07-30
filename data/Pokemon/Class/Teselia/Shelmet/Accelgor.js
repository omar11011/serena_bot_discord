const Base = require('./Shelmet').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 617
        this.pokemon = 'Accelgor'
        this.peso = 25.3
        this.altura = 0.8
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('chupavidas'), 1],
            [move.get('bomba ácida'), 4],
            [move.get('ataque rápido'), 13],
            [move.get('estoicismo'), 16],
            [move.get('megaagotar'), 20],
            [move.get('rapidez'), 25],
            [move.get('shuriken de agua'), 30],
            [move.get('gigadrenado'), 37],
            [move.get('zumbido'), 44],
        ]
        this.stats = {
            hp: 80,
            attack: 70,
            defense: 40,
            spattack: 100,
            spdefense: 60,
            speed: 145,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}