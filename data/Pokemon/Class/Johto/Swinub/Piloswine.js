const Base = require('./Swinub').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 221
        this.pokemon = 'Piloswine'
        this.peso = 55.8
        this.altura = 1.1
        this.evolucion = [
            new Entidades.Evolucion.Movimiento('Mamoswine', move.get('poder pasado'))
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picotazo'), 1],
            [move.get('cornada'), 1],
            [move.get('nieve polvo'), 8],
            [move.get('bofetón lodo'), 11],
            [move.get('bomba fango'), 18],
            [move.get('viento hielo'), 21],
            [move.get('colmillo hielo'), 24],
            [move.get('derribo'), 28],
            [move.get('ataque furia'), 33],
            [move.get('poder pasado'), 40],
            [move.get('golpe'), 41],
            [move.get('terremoto'), 46],
            [move.get('ventisca'), 52],
        ]
        this.stats = {
            hp: 100,
            attack: 100,
            defense: 80,
            spattack: 60,
            spdefense: 60,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}