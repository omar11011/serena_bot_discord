const Base = require('./Piplup').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 394
        this.pokemon = 'Prinplup'
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.peso = 23
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Empoleon', 36),
        ]
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('burbuja'), 8],
            [move.get('picotazo'), 15],
            [move.get('rayo burbuja'), 19],
            [move.get('ataque furia'), 28],
            [move.get('salmuera'), 33],
            [move.get('torbellino'), 37],
            [move.get('pico taladro'), 46],
            [move.get('hidrobomba'), 51],
        ]
        this.stats = {
            hp: 64,
            attack: 66,
            defense: 68,
            spattack: 81,
            spdefense: 76,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}