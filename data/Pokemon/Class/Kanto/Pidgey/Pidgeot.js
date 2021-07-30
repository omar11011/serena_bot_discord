const Base = require('./Pidgeotto').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 18
        this.pokemon = 'Pidgeot'
        this.peso = 39.5
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Pidgeot', item.get('pidgeotita')),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('tornado'), 9],
            [move.get('ataque rápido'), 13],
            [move.get('ciclón'), 22],
            [move.get('ataque ala'), 38],
            [move.get('viento cortante'), 53],
            [move.get('tajo aéreo'), 62],
            [move.get('vendaval'), 68],
        ]
        this.stats = {
            hp: 83,
            attack: 80,
            defense: 75,
            spattack: 70,
            spdefense: 70,
            speed: 101,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}