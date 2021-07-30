const Base = require('./Larvitar').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 247
        this.pokemon = 'Pupitar de Saife'
        this.peso = 152
        this.altura = 1.2
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Tyranitar de Saife', 55),
        ]
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('guardia baja'), 14],
            [move.get('avalancha'), 19],
            [move.get('golpe'), 28],
            [move.get('pulso umbrío'), 34],
            [move.get('vendetta'), 41],
            [move.get('triturar'), 47],
            [move.get('lluvia ígnea'), 54],
            [move.get('roca afilada'), 60],
            [move.get('hiperrayo'), 67],
        ]
        this.stats = {
            hp: 70,
            attack: 84,
            defense: 70,
            spattack: 65,
            spdefense: 70,
            speed: 61,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}