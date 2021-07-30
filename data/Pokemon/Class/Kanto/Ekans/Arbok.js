const Base = require('./Ekans').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 24
        this.pokemon = 'Arbok'
        this.peso = 65
        this.altura = 3.5
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arbok', item.get('arbokita')),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('constricción'), 1],
            [move.get('picotazo venenoso'), 4],
            [move.get('mordisco'), 9],
            [move.get('ácido'), 20],
            [move.get('triturar'), 22],
            [move.get('escupir'), 27],
            [move.get('bomba ácida'), 32],
            [move.get('bomba fango'), 39],
            [move.get('eructo'), 48],
            [move.get('lanza mugre'), 63],
        ]
        this.stats = {
            hp: 60,
            attack: 95,
            defense: 69,
            spattack: 65,
            spdefense: 79,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}