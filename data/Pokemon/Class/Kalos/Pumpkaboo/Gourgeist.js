const Base = require('./Pumpkaboo').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 711
        this.pokemon = 'Gourgeist'
        this.peso = 12.5
        this.altura = 0.9
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('hoja afilada'), 16],
            [move.get('recurrente'), 26],
            [move.get('sombra vil'), 30],
            [move.get('bola sombra'), 36],
            [move.get('bomba germen'), 48],
            [move.get('golpe fantasma'), 57],
            [move.get('bola sombra'), 70],
        ]
        this.stats = {
            hp: 65,
            attack: 90,
            defense: 122,
            spattack: 58,
            spdefense: 75,
            speed: 84,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}