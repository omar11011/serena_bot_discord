const Base = require('./Morelull').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 756
        this.pokemon = 'Shiinotic'
        this.peso = 11.5
        this.altura = 1
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('impresionar'), 4],
            [move.get('megaagotar'), 15],
            [move.get('gigadrenado'), 31],
            [move.get('fuerza lunar'), 44],
            [move.get('come sueños'), 49],
        ]
        this.stats = {
            hp: 60,
            attack: 45,
            defense: 80,
            spattack: 90,
            spdefense: 100,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}