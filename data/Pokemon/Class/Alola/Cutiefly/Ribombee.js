const Base = require('./Cutiefly').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 743
        this.pokemon = 'Ribombee'
        this.peso = 0.5
        this.altura = 0.2
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('viento feérico'), 4],
            [move.get('estoicismo'), 10],
            [move.get('viento plata'), 13],
            [move.get('beso drenaje'), 16],
            [move.get('bola de polen'), 25],
            [move.get('zumbido'), 35],
            [move.get('brillo mágico'), 38],
        ]
        this.stats = {
            hp: 60,
            attack: 55,
            defense: 60,
            spattack: 95,
            spdefense: 70,
            speed: 124,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}