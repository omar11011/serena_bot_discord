const Base = require('./Weedle').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 14
        this.pokemon = 'Kakuna'
        this.peso = 10
        this.altura = 0.6
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Beedrill', 10),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('picadura'), 1],
            [move.get('electrotela'), 9],
        ]
        this.stats = {
            hp: 45,
            attack: 25,
            defense: 50,
            spattack: 25,
            spdefense: 25,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}