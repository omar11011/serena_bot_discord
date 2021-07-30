const Base = require('./Kakuna').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 15
        this.pokemon = 'Beedrill'
        this.peso = 29.5
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Beedrill', item.get('beedrillita')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('ataque furia'), 1],
            [move.get('doble ataque'), 1],
            [move.get('furia'), 14],
            [move.get('persecución'), 17],
            [move.get('carga tóxica'), 23],
            [move.get('buena baza'), 26],
            [move.get('pin misil'), 32],
            [move.get('puya nociva'), 35],
        ]
        this.stats = {
            hp: 65,
            attack: 90,
            defense: 40,
            spattack: 45,
            spdefense: 80,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}