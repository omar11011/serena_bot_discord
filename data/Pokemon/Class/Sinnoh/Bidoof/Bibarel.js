const Base = require('./Bidoof').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 400
        this.pokemon = 'Bibarel'
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Agua,
        ]
        this.peso = 31.5
        this.altura = 1
        this.evolucion = []
        this.captura = 127
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 13],
            [move.get('pistola agua'), 15],
            [move.get('golpe cabeza'), 18],
            [move.get('hiper colmillo'), 23],
            [move.get('derribo'), 38],
            [move.get('super diente'), 43],
            [move.get('fuerza bruta'), 48],
        ]
        this.stats = {
            hp: 79,
            attack: 85,
            defense: 60,
            spattack: 55,
            spdefense: 60,
            speed: 71,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}