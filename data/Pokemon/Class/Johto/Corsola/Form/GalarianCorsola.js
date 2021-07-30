const Base = require('../Corsola').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Corsola de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.peso = 0.5
        this.altura = 0.6
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Cursola', 38),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impresionar'), 5],
            [move.get('poder pasado'), 20],
            [move.get('infortunio'), 25],
            [move.get('joya de luz'), 40],
            [move.get('tinieblas'), 45],
            [move.get('manto espejo'), 55],
        ]
        this.stats = {
            hp: 60,
            attack: 55,
            defense: 100,
            spattack: 65,
            spdefense: 100,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}