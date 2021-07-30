const Base = require('./Scorbunny').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 814
        this.pokemon = 'Raboot'
        this.peso = 9
        this.altura = 0.6
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Cinderace', 35),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 6],
            [move.get('ataque rápido'), 8],
            [move.get('doble patada'), 12],
            [move.get('nitrocarga'), 19],
            [move.get('golpe cabeza'), 30],
            [move.get('contraataque'), 36],
            [move.get('bote'), 42],
            [move.get('doble filo'), 46],
        ]
        this.stats = {
            hp: 65,
            attack: 86,
            defense: 60,
            spattack: 55,
            spdefense: 60,
            speed: 94,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}