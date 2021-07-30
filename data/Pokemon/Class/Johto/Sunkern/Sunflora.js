const Base = require('./Sunkern').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 192
        this.pokemon = 'Sunflora'
        this.peso = 8.5
        this.altura = 0.8
        this.evolucion = []
        this.captura = 120
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('destructor'), 1],
            [move.get('megaagotar'), 10],
            [move.get('hoja afilada'), 16],
            [move.get('gigadrenado'), 22],
            [move.get('recurrente'), 25],
            [move.get('danza pétalo'), 28],
            [move.get('don natural'), 31],
            [move.get('rayo solar'), 34],
            [move.get('doble filo'), 37],
            [move.get('lluevehojas'), 43],
            [move.get('tormenta floral'), 50],
        ]
        this.stats = {
            hp: 75,
            attack: 75,
            defense: 55,
            spattack: 105,
            spdefense: 85,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}