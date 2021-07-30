const Base = require('./Oddish').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 44
        this.pokemon = 'Gloom'
        this.region = Entidades.Region.Kanto
        this.peso = 8.6
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Item('Vileplume', item.get('piedra hoja')),
            new Entidades.Evolucion.Item('Bellossom', item.get('piedra solar')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('ácido'), 9],
            [move.get('megaagotar'), 19],
            [move.get('gigadrenado'), 34],
            [move.get('don natural'), 44],
            [move.get('tormenta floral'), 49],
            [move.get('danza pétalo'), 59],
            [move.get('rayo solar'), 61],
        ]
        this.stats = {
            hp: 60,
            attack: 65,
            defense: 70,
            spattack: 85,
            spdefense: 75,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}