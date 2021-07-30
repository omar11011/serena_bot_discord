const Base = require('./Cacnea').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 332
        this.pokemon = 'Cacturne'
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 77.4
        this.altura = 1.3
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('picotazo venenoso'), 1],
            [move.get('desquite'), 1],
            [move.get('absorber'), 4],
            [move.get('brazo pincho'), 16],
            [move.get('finta'), 19],
            [move.get('vendetta'), 26],
            [move.get('golpe bajo'), 34],
            [move.get('pin misil'), 38],
            [move.get('energibola'), 44],
        ]
        this.stats = {
            hp: 70,
            attack: 115,
            defense: 60,
            spattack: 115,
            spdefense: 60,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}