const Base = require('./AlolanCubone').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 105
        this.pokemon = 'Marowak de Alola'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Fantasma,
        ]
        this.peso = 34
        this.altura = 1
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('falsotortazo'), 1],
            [move.get('golpe cabeza'), 1],
            [move.get('represalia'), 1],
            [move.get('doble filo'), 1],
            [move.get('bofetón lodo'), 1],
            [move.get('giro fuego'), 1],
            [move.get('rueda fuego'), 1],
            [move.get('infortunio'), 1],
            [move.get('furia'), 1],
            [move.get('lanzamiento'), 1],
            [move.get('pataleta'), 1],
            [move.get('ataque óseo'), 1],
            [move.get('esfuerzo'), 1],
            [move.get('huesomerang'), 1],
            [move.get('golpe'), 1],
            [move.get('envite ígneo'), 1],
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