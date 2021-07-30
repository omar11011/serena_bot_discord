const Base = require('./Skiddo').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 673
        this.pokemon = 'Gogoat'
        this.peso = 91
        this.altura = 1.7
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 7],
            [move.get('hoja afilada'), 13],
            [move.get('derribo'), 22],
            [move.get('terratemblor'), 26],
            [move.get('bomba germen'), 30],
            [move.get('doble filo'), 40],
            [move.get('asta drenaje'), 47],
            [move.get('hoja aguda'), 55],
            [move.get('terremoto'), 60],
            [move.get('golpe aéreo'), 65],
        ]
        this.stats = {
            hp: 123,
            attack: 100,
            defense: 62,
            spattack: 97,
            spdefense: 81,
            speed: 68,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}