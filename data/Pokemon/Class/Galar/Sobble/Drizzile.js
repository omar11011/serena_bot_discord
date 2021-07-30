const Base = require('./Sobble').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 817
        this.pokemon = 'Drizzile'
        this.peso = 11.5
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Inteleon', 35),
        ]
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('pistola agua'), 6],
            [move.get('atadura'), 8],
            [move.get('hidropulso'), 12],
            [move.get('golpe bajo'), 24],
            [move.get('hidroariete'), 36],
        ]
        this.stats = {
            hp: 65,
            attack: 60,
            defense: 55,
            spattack: 95,
            spdefense: 55,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}