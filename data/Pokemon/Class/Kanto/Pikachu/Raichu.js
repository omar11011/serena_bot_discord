const Base = require('./Pikachu').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 26
        this.pokemon = 'Raichu'
        this.peso = 21
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Raichu', item.get('raichusita')),
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('impactrueno'), 1],
            [move.get('ataque rápido'), 4],
            [move.get('bola voltio'), 10],
            [move.get('cola férrea'), 17],
            [move.get('amago'), 17],
            [move.get('chispa'), 21],
            [move.get('mega puño'), 22],
            [move.get('moflete estático'), 24],
            [move.get('chispazo'), 30],
            [move.get('atizar'), 34],
            [move.get('rayo'), 40],
            [move.get('voltio cruel'), 48],
            [move.get('trueno'), 55],
        ]
        this.stats = {
            hp: 60,
            attack: 90,
            defense: 55,
            spattack: 90,
            spdefense: 80,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}