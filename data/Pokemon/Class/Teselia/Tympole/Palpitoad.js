const Base = require('./Tympole').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 536
        this.pokemon = 'Palpitoad'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Tierra,
        ]
        this.peso = 17
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Seismitoad', 36),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('canon'), 9],
            [move.get('rayo burbuja'), 12],
            [move.get('disparo lodo'), 16],
            [move.get('alboroto'), 23],
            [move.get('agua lodosa'), 28],
            [move.get('azote'), 37],
            [move.get('eco voz'), 42],
            [move.get('hidrobomba'), 47],
            [move.get('vozarrón'), 51],
        ]
        this.stats = {
            hp: 75,
            attack: 65,
            defense: 55,
            spattack: 65,
            spdefense: 55,
            speed: 69,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}