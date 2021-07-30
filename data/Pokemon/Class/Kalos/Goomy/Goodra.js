const Base = require('./Sliggoo').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 706
        this.pokemon = 'Goodra'
        this.peso = 150.5
        this.altura = 2
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('burbuja'), 1],
            [move.get('amago'), 1],
            [move.get('absorber'), 5],
            [move.get('dragoaliento'), 18],
            [move.get('azote'), 28],
            [move.get('golpe cuerpo'), 32],
            [move.get('agua lodosa'), 38],
            [move.get('pulso dragón'), 47],
            [move.get('latigazo'), 50],
            [move.get('acua cola'), 50],
            [move.get('enfado'), 55],
        ]
        this.stats = {
            hp: 90,
            attack: 100,
            defense: 70,
            spattack: 110,
            spdefense: 150,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}