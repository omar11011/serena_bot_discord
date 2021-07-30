const Base = require('./Rhyhorn').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 112
        this.pokemon = 'Rhydon'
        this.peso = 120
        this.altura = 1.9
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Rhyperior', item.get('protector'))
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('cornada'), 1],
            [move.get('ataque furia'), 5],
            [move.get('antiaéreo'), 13],
            [move.get('pisotón'), 17],
            [move.get('terratemblor'), 21],
            [move.get('guardia baja'), 25],
            [move.get('pedrada'), 29],
            [move.get('taladradora'), 33],
            [move.get('derribo'), 37],
            [move.get('roca afilada'), 41],
            [move.get('terremoto'), 48],
            [move.get('mega puño'), 50],
            [move.get('mega cuerno'), 55],
            [move.get('perforador'), 62],
        ]
        this.stats = {
            hp: 105,
            attack: 130,
            defense: 120,
            spattack: 45,
            spdefense: 45,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}