const Base = require('./Gloom').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 45
        this.pokemon = 'Vileplume'
        this.peso = 18.6
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Vileplume', item.get('vileplumita')),
        ]
        this.color = Entidades.Color.Rojo
        this.captura = 45
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('ácido'), 1],
            [move.get('furia'), 10],
            [move.get('derribo'), 14],
            [move.get('megaagotar'), 19],
            [move.get('gigadrenado'), 34],
            [move.get('don natural'), 44],
            [move.get('tormenta floral'), 49],
            [move.get('danza pétalo'), 59],
            [move.get('rayo solar'), 69],
        ]
        this.stats = {
            hp: 75,
            attack: 80,
            defense: 85,
            spattack: 110,
            spdefense: 90,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}