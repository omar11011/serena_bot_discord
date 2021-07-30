const Base = require('./Corphish').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 342
        this.pokemon = 'Crawdaunt'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 32.8
        this.altura = 1.1
        this.evolucion = []
        this.captura = 205
        this.amistad = 50
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('agarre'), 7],
            [move.get('rayo burbuja'), 14],
            [move.get('doble golpe'), 20],
            [move.get('desarme'), 23],
            [move.get('tajo umbrío'), 26],
            [move.get('concha filo'), 32],
            [move.get('triturar'), 40],
            [move.get('martillazo'), 47],
            [move.get('guillotina'), 65],
        ]
        this.stats = {
            hp: 63,
            attack: 120,
            defense: 85,
            spattack: 90,
            spdefense: 55,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}