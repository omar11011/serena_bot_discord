const Base = require('./Poliwag').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 61
        this.pokemon = 'Poliwhirl'
        this.peso = 20
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Item('Poliwrath', item.get('piedra agua')),
            new Entidades.Evolucion.Intercambio('Politoed', 1, item.get('roca del rey')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 5],
            [move.get('burbuja'), 11],
            [move.get('doble bofetón'), 15],
            [move.get('golpe cuerpo'), 21],
            [move.get('rayo burbuja'), 27],
            [move.get('disparo lodo'), 32],
            [move.get('espabila'), 43],
            [move.get('hidrobomba'), 48],
            [move.get('bomba fango'), 53],
        ]
        this.stats = {
            hp: 65,
            attack: 65,
            defense: 65,
            spattack: 50,
            spdefense: 50,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}