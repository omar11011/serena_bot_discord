const Base = require('../Mr.Mime').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Mr. Mime de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Psíquico,
        ]
        this.peso = 56.8
        this.altura = 1.4
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Mr. Rime', 42)
        ]
        this.movimientos = [
            [move.get('brillo mágico'), 1],
            [move.get('destructor'), 1],
            [move.get('giro rápido'), 1],
            [move.get('canto helado'), 1],
            [move.get('confusión'), 12],
            [move.get('viento hielo'), 20],
            [move.get('doble patada'), 24],
            [move.get('psicorrayo'), 28],
            [move.get('golpe bajo'), 40],
            [move.get('liofilización'), 44],
            [move.get('psíquico'), 48],
        ]
        this.stats = {
            hp: 50,
            attack: 65,
            defense: 65,
            spattack: 90,
            spdefense: 90,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}