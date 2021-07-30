const Base = require('../Slowking').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Slowking de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Psíquico,
        ]
        this.peso = 79.5
        this.altura = 1.8
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('joya de luz'), 1],
            [move.get('ácido'), 1],
            [move.get('confusión'), 12],
            [move.get('hidropulso'), 18],
            [move.get('golpe cabeza'), 21],
            [move.get('cabezazo zen'), 24],
            [move.get('surf'), 30],
            [move.get('conjuro funesto'), 32],
            [move.get('psíquico'), 36],
        ]
        this.stats = {
            hp: 95,
            attack: 65,
            defense: 80,
            spattack: 100,
            spdefense: 110,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}