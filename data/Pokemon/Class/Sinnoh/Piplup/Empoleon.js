const Base = require('./Prinplup').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 395
        this.pokemon = 'Empoleon'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Acero,
        ]
        this.peso = 84.5
        this.altura = 1.7
        this.evolucion = []
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('burbuja'), 8],
            [move.get('picotazo'), 15],
            [move.get('garra metal'), 16],
            [move.get('rayo burbuja'), 19],
            [move.get('ataque furia'), 28],
            [move.get('salmuera'), 33],
            [move.get('acua jet'), 36],
            [move.get('torbellino'), 39],
            [move.get('pico taladro'), 52],
            [move.get('hidrobomba'), 59],
        ]
        this.stats = {
            hp: 84,
            attack: 86,
            defense: 88,
            spattack: 111,
            spdefense: 101,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}