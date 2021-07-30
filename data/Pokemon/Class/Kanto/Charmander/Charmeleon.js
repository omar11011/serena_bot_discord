const Base = require('./Charmander').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 5
        this.pokemon = 'Charmeleon'
        this.peso = 19
        this.altura = 1.1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Charizard', 36),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 7],
            [move.get('garra metal'), 13],
            [move.get('furia dragón'), 17],
            [move.get('furia'), 20],
            [move.get('colmillo ígneo'), 28],
            [move.get('pirotecnia'), 32],
            [move.get('lanzallamas'), 34],
            [move.get('cuchillada'), 39],
            [move.get('giro fuego'), 50],
            [move.get('infierno'), 54],
        ]
        this.stats = {
            hp: 58,
            attack: 64,
            defense: 58,
            spattack: 80,
            spdefense: 65,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}