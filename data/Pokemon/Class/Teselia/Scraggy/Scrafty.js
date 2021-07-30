const Base = require('./Scraggy').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 560
        this.pokemon = 'Scrafty'
        this.peso = 30
        this.altura = 1.1
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('patada baja'), 1],
            [move.get('finta'), 9],
            [move.get('golpe cabeza'), 12],
            [move.get('demolición'), 20],
            [move.get('vendetta'), 23],
            [move.get('guardia baja'), 27],
            [move.get('patada salto alta'), 31],
            [move.get('triturar'), 38],
            [move.get('imagen'), 45],
            [move.get('treparrocas'), 51],
            [move.get('puño certero'), 58],
            [move.get('testarazo'), 65],
        ]
        this.stats = {
            hp: 65,
            attack: 90,
            defense: 115,
            spattack: 45,
            spdefense: 115,
            speed: 58,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}