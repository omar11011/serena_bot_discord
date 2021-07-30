const Base = require('./Chikorita').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 153
        this.pokemon = 'Bayleef'
        this.peso = 15.8
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Meganium', 32),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('hoja afilada'), 6],
            [move.get('hoja mágica'), 22],
            [move.get('don natural'), 26],
            [move.get('golpe cuerpo'), 40],
            [move.get('rayo solar'), 54],
        ]
        this.stats = {
            hp: 60,
            attack: 62,
            defense: 80,
            spattack: 63,
            spdefense: 80,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}