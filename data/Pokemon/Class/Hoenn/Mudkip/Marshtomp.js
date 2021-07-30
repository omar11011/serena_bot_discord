const Base = require('./Mudkip').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 259
        this.pokemon = 'Marshtomp'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Tierra,
        ]
        this.peso = 28
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Swampert', 36),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 4],
            [move.get('bofetón lodo'), 9],
            [move.get('bomba fango'), 22],
            [move.get('avalancha'), 28],
            [move.get('torbellino'), 33],
            [move.get('agua lodosa'), 38],
            [move.get('derribo'), 42],
            [move.get('terremoto'), 48],
            [move.get('esfuerzo'), 52],
        ]
        this.stats = {
            hp: 70,
            attack: 85,
            defense: 70,
            spattack: 60,
            spdefense: 70,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}