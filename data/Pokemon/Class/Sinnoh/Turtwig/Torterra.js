const Base = require('./Grotle').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 389
        this.pokemon = 'Torterra'
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Tierra,
        ]
        this.peso = 310
        this.altura = 2.2
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('absorber'), 9],
            [move.get('hoja afilada'), 13],
            [move.get('mordisco'), 22],
            [move.get('megaagotar'), 27],
            [move.get('mazazo'), 32],
            [move.get('terremoto'), 32],
            [move.get('triturar'), 45],
            [move.get('gigadrenado'), 51],
            [move.get('lluevehojas'), 57],
        ]
        this.stats = {
            hp: 95,
            attack: 109,
            defense: 105,
            spattack: 75,
            spdefense: 85,
            speed: 56,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}