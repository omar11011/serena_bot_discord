const Base = require('./Wailmer').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 321
        this.pokemon = 'Wailord'
        this.peso = 398
        this.altura = 14.5
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 7],
            [move.get('desenrollar'), 10],
            [move.get('torbellino'), 13],
            [move.get('impresionar'), 16],
            [move.get('hidropulso'), 19],
            [move.get('salmuera'), 25],
            [move.get('buceo'), 33],
            [move.get('salpicar'), 44],
            [move.get('bote'), 51],
            [move.get('hidrobomba'), 58],
            [move.get('cuerpo pesado'), 65],
        ]
        this.stats = {
            hp: 170,
            attack: 90,
            defense: 45,
            spattack: 90,
            spdefense: 45,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}