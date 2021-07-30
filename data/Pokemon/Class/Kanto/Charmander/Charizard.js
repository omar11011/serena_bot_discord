const Base = require('./Charmeleon').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 6
        this.pokemon = 'Charizard'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Volador,
        ]
        this.peso = 90.5
        this.altura = 1.7
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Charizard X', item.get('charizardita x')),
            new Entidades.Evolucion.Mega('Mega Charizard Y', item.get('charizardita y')),
            new Entidades.Evolucion.Gigamax('Charizard Gigamax'),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 1],
            [move.get('tajo aéreo'), 1],
            [move.get('garra dragón'), 1],
            [move.get('garra umbría'), 1],
            [move.get('garra metal'), 13],
            [move.get('furia dragón'), 17],
            [move.get('furia'), 20],
            [move.get('colmillo ígneo'), 28],
            [move.get('pirotecnia'), 32],
            [move.get('lanzallamas'), 34],
            [move.get('ataque ala'), 36],
            [move.get('cuchillada'), 41],
            [move.get('giro fuego'), 56],
            [move.get('infierno'), 62],
            [move.get('onda ígnea'), 71],
            [move.get('envite ígneo'), 77],
        ]
        this.stats = {
            hp: 78,
            attack: 84,
            defense: 78,
            spattack: 109,
            spdefense: 85,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}