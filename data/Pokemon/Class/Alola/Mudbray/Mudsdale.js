const Base = require('./Mudbray').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 750
        this.pokemon = 'Mudsdale'
        this.peso = 920
        this.altura = 2.5
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('bofetón lodo'), 1],
            [move.get('terratemblor'), 10],
            [move.get('doble patada'), 15],
            [move.get('pisotón'), 17],
            [move.get('fuerza equina'), 24],
            [move.get('cuerpo pesado'), 34],
            [move.get('contraataque'), 42],
            [move.get('terremoto'), 47],
            [move.get('mega patada'), 55],
            [move.get('fuerza bruta'), 60],
        ]
        this.stats = {
            hp: 100,
            attack: 125,
            defense: 100,
            spattack: 55,
            spdefense: 85,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}