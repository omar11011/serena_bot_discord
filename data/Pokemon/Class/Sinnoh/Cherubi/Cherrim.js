const Base = require('./Cherubi').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 421
        this.pokemon = 'Cherrim'
        this.peso = 9.3
        this.altura = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Cherrim Forma Soleada'),
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('hoja mágica'), 19],
            [move.get('derribo'), 35],
            [move.get('rayo solar'), 43],
            [move.get('tormenta solar'), 50],
        ]
        this.stats = {
            hp: 70,
            attack: 60,
            defense: 70,
            spattack: 87,
            spdefense: 78,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}