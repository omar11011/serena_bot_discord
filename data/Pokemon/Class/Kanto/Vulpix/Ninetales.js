const Base = require('./Vulpix').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 38
        this.pokemon = 'Ninetales'
        this.peso = 19.9
        this.altura = 1.1
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('ataque rápido'), 10],
            [move.get('giro fuego'), 12],
            [move.get('golpe cuerpo'), 14],
            [move.get('vendetta'), 18],
            [move.get('derribo'), 21],
            [move.get('finta'), 23],
            [move.get('infortunio'), 26],
            [move.get('pirotecnia'), 28],
            [move.get('paranormal'), 31],
            [move.get('lanzallamas'), 36],
            [move.get('llamarada'), 42],
            [move.get('infierno'), 50],
        ]
        this.stats = {
            hp: 73,
            attack: 76,
            defense: 75,
            spattack: 81,
            spdefense: 100,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}