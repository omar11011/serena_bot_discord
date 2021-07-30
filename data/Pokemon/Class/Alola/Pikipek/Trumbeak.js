const Base = require('./Pikipek').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 732
        this.pokemon = 'Trumbeak'
        this.peso = 14.8
        this.altura = 0.6
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Toucannon', 28),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('pedrada'), 1],
            [move.get('eco voz'), 7],
            [move.get('golpe roca'), 9],
            [move.get('picoteo'), 16],
            [move.get('ataque furia'), 24],
            [move.get('pico taladro'), 32],
            [move.get('recurrente'), 37],
            [move.get('vozarrón'), 45],
        ]
        this.stats = {
            hp: 55,
            attack: 85,
            defense: 50,
            spattack: 40,
            spdefense: 50,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}