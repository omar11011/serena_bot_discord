const Base = require('./Shellos').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 423
        this.pokemon = 'Gastrodon'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Tierra,
        ]
        this.peso = 29.9
        this.altura = 0.9
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('bofetón lodo'), 1],
            [move.get('hidropulso'), 7],
            [move.get('bomba fango'), 11],
            [move.get('poder oculto'), 16],
            [move.get('golpe cuerpo'), 29],
            [move.get('agua lodosa'), 44],
        ]
        this.stats = {
            hp: 111,
            attack: 83,
            defense: 68,
            spattack: 92,
            spdefense: 82,
            speed: 39,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}