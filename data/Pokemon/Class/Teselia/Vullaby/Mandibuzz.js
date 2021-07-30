const Base = require('./Vullaby').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 630
        this.pokemon = 'Mandibuzz'
        this.peso = 39.5
        this.altura = 1.2
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('ataque furia'), 5],
            [move.get('picoteo'), 10],
            [move.get('finta'), 23],
            [move.get('castigo'), 28],
            [move.get('tajo aéreo'), 41],
            [move.get('pulso umbrío'), 46],
            [move.get('ataque óseo'), 54],
            [move.get('pájaro osado'), 63],
        ]
        this.stats = {
            hp: 110,
            attack: 60,
            defense: 105,
            spattack: 55,
            spdefense: 95,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}