const Base = require('./Doduo').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 85
        this.pokemon = 'Dodrio'
        this.peso = 85.2
        this.altura = 1.8
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Dodrio X', item.get('dodriosita x')),
            new Entidades.Evolucion.Mega('Mega Dodrio Y', item.get('dodriosita y')),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('triataque'), 1],
            [move.get('ataque rápido'), 5],
            [move.get('furia'), 8],
            [move.get('ataque furia'), 12],
            [move.get('persecución'), 15],
            [move.get('picoteo'), 19],
            [move.get('doble golpe'), 22],
            [move.get('alboroto'), 29],
            [move.get('patada salto'), 43],
            [move.get('pico taladro'), 47],
            [move.get('golpe'), 56],
        ]
        this.stats = {
            hp: 60,
            attack: 110,
            defense: 70,
            spattack: 60,
            spdefense: 60,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}