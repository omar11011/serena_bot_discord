const Base = require('./Darumaka').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 555
        this.pokemon = 'Darmanitan'
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.peso = 92.9
        this.altura = 1.3
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Darmanitan Modo Daruma'),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 3],
            [move.get('calcinación'), 6],
            [move.get('furia'), 9],
            [move.get('colmillo ígneo'), 11],
            [move.get('golpe cabeza'), 14],
            [move.get('alboroto'), 17],
            [move.get('imagen'), 19],
            [move.get('puño fuego'), 22],
            [move.get('golpe'), 27],
            [move.get('machada'), 35],
            [move.get('envite ígneo'), 38],
            [move.get('fuerza bruta'), 47],
            [move.get('sofoco'), 54],
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