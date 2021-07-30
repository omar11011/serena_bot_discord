const Base = require('./Magikarp').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 130
        this.pokemon = 'Gyarados'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Volador,
        ]
        this.peso = 235
        this.altura = 6.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Gyarados', item.get('gyaradosita')),
            new Entidades.Evolucion.Gigamax('Gyarados Gigamax'),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('placaje'), 1],
            [move.get('golpe'), 1],
            [move.get('ciclón'), 24],
            [move.get('colmillo hielo'), 27],
            [move.get('acua cola'), 30],
            [move.get('furia dragón'), 36],
            [move.get('triturar'), 39],
            [move.get('hidrobomba'), 42],
            [move.get('vendaval'), 48],
            [move.get('hiperrayo'), 54],
        ]
        this.stats = {
            hp: 95,
            attack: 125,
            defense: 79,
            spattack: 60,
            spdefense: 100,
            speed: 81,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}