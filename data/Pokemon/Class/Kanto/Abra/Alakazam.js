const Base = require('./Kadabra').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 65
        this.pokemon = 'Alakazam'
        this.peso = 48
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Alakazam',item.get('alakazamita')),
        ]
        this.captura = 50
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('arañazo'), 6],
            [move.get('golpe cuerpo'), 10],
            [move.get('mega puño'), 14],
            [move.get('psicorrayo'), 21],
            [move.get('doble filo'), 24],
            [move.get('psicocorte'), 28],
            [move.get('psíquico'), 38],
            [move.get('premonición'), 43],
            [move.get('hiperrayo'), 50],
        ]
        this.stats = {
            hp: 55,
            attack: 50,
            defense: 45,
            spattack: 135,
            spdefense: 95,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}