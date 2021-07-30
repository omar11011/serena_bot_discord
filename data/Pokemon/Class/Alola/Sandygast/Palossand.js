const Base = require('./Sandygast').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 770
        this.pokemon = 'Palossand'
        this.peso = 250
        this.altura = 1.3
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('impresionar'), 5],
            [move.get('bucle arena'), 15],
            [move.get('megaagotar'), 18],
            [move.get('terratemblor'), 23],
            [move.get('gigadrenado'), 36],
            [move.get('bola sombra'), 41],
            [move.get('tierra viva'), 47],
        ]
        this.stats = {
            hp: 85,
            attack: 75,
            defense: 110,
            spattack: 100,
            spdefense: 75,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}