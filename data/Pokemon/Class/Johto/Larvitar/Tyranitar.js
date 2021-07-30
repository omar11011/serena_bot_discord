const Base = require('./Pupitar').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 248
        this.pokemon = 'Tyranitar'
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 202
        this.altura = 2
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Tyranitar', item.get('tyranitarita')),
            new Entidades.Evolucion.Gigamax('Tyranitar Gigamax'),
        ]
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('guardia baja'), 14],
            [move.get('avalancha'), 19],
            [move.get('golpe'), 28],
            [move.get('pulso umbrío'), 34],
            [move.get('vendetta'), 41],
            [move.get('triturar'), 47],
            [move.get('terremoto'), 54],
            [move.get('roca afilada'), 63],
            [move.get('hiperrayo'), 73],
            [move.get('giga impacto'), 82],
        ]
        this.stats = {
            hp: 100,
            attack: 134,
            defense: 110,
            spattack: 95,
            spdefense: 100,
            speed: 61,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}