const Base = require('./Clauncher').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 693
        this.pokemon = 'Clawitzer'
        this.peso = 35.3
        this.altura = 1.3
        this.evolucion = []
        this.captura = 55
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('agarre'), 9],
            [move.get('pistola agua'), 12],
            [move.get('azote'), 16],
            [move.get('rayo burbuja'), 20],
            [move.get('martillazo'), 30],
            [move.get('hidropulso'), 34],
            [move.get('antiaéreo'), 42],
            [move.get('acua jet'), 49],
            [move.get('agua lodosa'), 57],
            [move.get('pulso umbrío'), 57],
            [move.get('pulso dragón'), 63],
            [move.get('esfera aural'), 67],
        ]
        this.stats = {
            hp: 71,
            attack: 73,
            defense: 88,
            spattack: 120,
            spdefense: 89,
            speed: 59,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}