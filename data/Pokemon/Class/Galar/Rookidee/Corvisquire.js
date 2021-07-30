const Base = require('./Rookidee').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 822
        this.pokemon = 'Corvisquire'
        this.tipo = [
            Entidades.Tipo.Volador,
        ]
        this.peso = 16
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Corviknight', 38),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('chulería'), 4],
            [move.get('ataque furia'), 12],
            [move.get('picoteo'), 16],
            [move.get('pico taladro'), 34],
            [move.get('pájaro osado'), 50],
        ]
        this.stats = {
            hp: 68,
            attack: 67,
            defense: 55,
            spattack: 43,
            spdefense: 55,
            speed: 77,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}