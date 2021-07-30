const Base = require('./Poliwhirl').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 62
        this.pokemon = 'Poliwrath'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 54
        this.altura = 1.3
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('sumisión'), 1],
            [move.get('pistola agua'), 5],
            [move.get('burbuja'), 11],
            [move.get('doble bofetón'), 15],
            [move.get('golpe cuerpo'), 21],
            [move.get('rayo burbuja'), 27],
            [move.get('puño dinámico'), 32],
            [move.get('disparo lodo'), 32],
            [move.get('espabila'), 43],
            [move.get('hidrobomba'), 48],
            [move.get('llave giro'), 51],
            [move.get('bomba fango'), 53],
        ]
        this.stats = {
            hp: 90,
            attack: 95,
            defense: 95,
            spattack: 70,
            spdefense: 90,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}