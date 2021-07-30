const Base = require('./Trumbeak').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 733
        this.pokemon = 'Toucannon'
        this.peso = 26
        this.altura = 1.1
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('pedrada'), 1],
            [move.get('eco voz'), 7],
            [move.get('golpe roca'), 9],
            [move.get('picoteo'), 16],
            [move.get('ataque furia'), 24],
            [move.get('pico cañón'), 28],
            [move.get('pico taladro'), 34],
            [move.get('recurrente'), 40],
            [move.get('vozarrón'), 50],
        ]
        this.stats = {
            hp: 80,
            attack: 120,
            defense: 75,
            spattack: 75,
            spdefense: 75,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}