const Base = require('./Cubchoo').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 614
        this.pokemon = 'Beartic'
        this.peso = 260
        this.altura = 2.6
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('acua jet'), 1],
            [move.get('viento hielo'), 13],
            [move.get('golpes furia'), 17],
            [move.get('salmuera'), 21],
            [move.get('cuchillada'), 33],
            [move.get('azote'), 36],
            [move.get('chuzos'), 37],
            [move.get('ventisca'), 45],
            [move.get('golpe'), 59],
            [move.get('frío polar'), 66],
            [move.get('fuerza bruta'), 72],
        ]
        this.stats = {
            hp: 95,
            attack: 130,
            defense: 80,
            spattack: 70,
            spdefense: 80,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}