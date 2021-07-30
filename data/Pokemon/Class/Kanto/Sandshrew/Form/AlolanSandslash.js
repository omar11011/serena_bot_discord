const Base = require('./AlolanSandshrew').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.id = 28
        this.pokemon = 'Sandslash de Alola'
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 55
        this.altura = 1.2
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('carámbano'), 1],
            [move.get('nieve polvo'), 5],
            [move.get('chuzos'), 1],
            [move.get('bola hielo'), 7],
            [move.get('giro rápido'), 9],
            [move.get('corte furia'), 11],
            [move.get('garra metal'), 14],
            [move.get('rapidez'), 17],
            [move.get('golpes furia'), 20],
            [move.get('cuchillada'), 26],
            [move.get('cabeza de hierro'), 30],
            [move.get('giro bola'), 34],
            [move.get('ventisca'), 46],
        ]
        this.stats = {
            hp: 75,
            attack: 100,
            defense: 120,
            spattack: 10,
            spdefense: 25,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}