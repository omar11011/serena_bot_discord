const Base = require('../Sandshrew').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Sandshrew de Alola'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 40
        this.altura = 0.7
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Item('Sandslash', item.get('piedra hielo')),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('nieve polvo'), 5],
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
            hp: 55,
            attack: 75,
            defense: 90,
            spattack: 10,
            spdefense: 35,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}