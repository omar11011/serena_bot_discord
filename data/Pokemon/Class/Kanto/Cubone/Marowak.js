const Base = require('./Cubone').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 105
        this.pokemon = 'Marowak'
        this.peso = 45
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Marowak', item.get('marowakita')),
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('hueso palo'), 7],
            [move.get('golpe cabeza'), 11],
            [move.get('huesomerang'), 21],
            [move.get('furia'), 23],
            [move.get('falsotortazo'), 27],
            [move.get('golpe'), 33],
            [move.get('lanzamiento'), 37],
            [move.get('pataleta'), 43],
            [move.get('esfuerzo'), 49],
            [move.get('doble filo'), 53],
            [move.get('represalia'), 59],
            [move.get('ataque óseo'), 65],
        ]
        this.stats = {
            hp: 60,
            attack: 80,
            defense: 110,
            spattack: 50,
            spdefense: 80,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}