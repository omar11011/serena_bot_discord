const Base = require('./Rufflet').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 628
        this.pokemon = 'Braviary'
        this.peso = 41
        this.altura = 1.5
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('ataque furia'), 5],
            [move.get('ataque ala'), 10],
            [move.get('golpe aéreo'), 23],
            [move.get('cuchillada'), 28],
            [move.get('tajo aéreo'), 41],
            [move.get('garra brutal'), 46],
            [move.get('caída libre'), 50],
            [move.get('pájaro osado'), 63],
            [move.get('golpe'), 70],
            [move.get('fuerza bruta'), 72],
        ]
        this.stats = {
            hp: 100,
            attack: 123,
            defense: 75,
            spattack: 57,
            spdefense: 75,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}