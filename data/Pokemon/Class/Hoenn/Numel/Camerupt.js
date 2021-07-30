const Base = require('./Numel').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 323
        this.pokemon = 'Camerupt'
        this.peso = 220
        this.altura = 1.9
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Camerupt', item.get('cameruptita'))
        ]
        this.captura = 150
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 5],
            [move.get('magnitud'), 12],
            [move.get('pirotecnia'), 15],
            [move.get('humareda'), 22],
            [move.get('tierra viva'), 26],
            [move.get('derribo'), 31],
            [move.get('avalancha'), 33],
            [move.get('terremoto'), 46],
            [move.get('estallido'), 52],
            [move.get('fisura'), 59],
        ]
        this.stats = {
            hp: 70,
            attack: 100,
            defense: 70,
            spattack: 105,
            spdefense: 75,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}