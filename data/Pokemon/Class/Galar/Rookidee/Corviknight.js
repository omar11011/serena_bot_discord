const Base = require('./Corvisquire').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 823
        this.pokemon = 'Corviknight'
        this.tipo = [
            Entidades.Tipo.Volador,
            Entidades.Tipo.Acero,
        ]
        this.peso = 75
        this.altura = 2.2
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Corviknight Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('ala de acero'), 1],
            [move.get('chulería'), 4],
            [move.get('ataque furia'), 12],
            [move.get('picoteo'), 16],
            [move.get('pico taladro'), 34],
            [move.get('pájaro osado'), 46],
        ]
        this.stats = {
            hp: 98,
            attack: 87,
            defense: 105,
            spattack: 53,
            spdefense: 85,
            speed: 67,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}