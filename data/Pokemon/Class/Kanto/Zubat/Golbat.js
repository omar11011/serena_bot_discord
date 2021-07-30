const Base = require('./Zubat').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 42
        this.pokemon = 'Golbat'
        this.peso = 55
        this.altura = 1.6
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Crobat'),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('impresionar'), 7],
            [move.get('mordisco'), 11],
            [move.get('ataque ala'), 13],
            [move.get('aire afilado'), 19],
            [move.get('rapidez'), 24],
            [move.get('colmillo veneno'), 27],
            [move.get('chupavidas'), 35],
            [move.get('carga tóxica'), 43],
            [move.get('tajo aéreo'), 48],
        ]
        this.stats = {
            hp: 75,
            attack: 80,
            defense: 70,
            spattack: 30,
            spdefense: 65,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}