const Base = require('./GalarianDarumaka').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 555
        this.pokemon = 'Darmanitan de Galar'
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.peso = 120
        this.altura = 1.7
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Darmanitan de Galar Modo Daruma'),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('nieve polvo'), 1],
            [move.get('mordisco'), 8],
            [move.get('alud'), 12],
            [move.get('colmillo hielo'), 20],
            [move.get('golpe cabeza'), 24],
            [move.get('puño hielo'), 28],
            [move.get('alboroto'), 32],
            [move.get('ventisca'), 44],
            [move.get('golpe'), 50],
            [move.get('fuerza bruta'), 56],
        ]
        this.stats = {
            hp: 105,
            attack: 140,
            defense: 55,
            spattack: 30,
            spdefense: 55,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}