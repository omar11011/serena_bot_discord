const Base = require('./Snom').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 873
        this.pokemon = 'Frosmoth'
        this.peso = 42
        this.altura = 1.3
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('estoicismo'), 1],
            [move.get('viento hielo'), 1],
            [move.get('acoso'), 8],
            [move.get('rayo aurora'), 24],
            [move.get('zumbido'), 32],
            [move.get('ventisca'), 40],
        ]
        this.stats = {
            hp: 70,
            attack: 65,
            defense: 60,
            spattack: 125,
            spdefense: 90,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}