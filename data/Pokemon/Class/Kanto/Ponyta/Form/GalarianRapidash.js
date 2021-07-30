const Base = require('./GalarianPonyta').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 78
        this.pokedex = false
        this.pokemon = 'Rapidash de Galar'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Hada,
        ]
        this.peso = 80
        this.altura = 1.7
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('psicocorte'), 1],
            [move.get('mega cuerno'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('confusión'), 10],
            [move.get('viento feérico'), 15],
            [move.get('psicorrayo'), 25],
            [move.get('pisotón'), 30],
            [move.get('derribo'), 43],
            [move.get('brillo mágico'), 49],
            [move.get('psíquico'), 56],
        ]
        this.stats = {
            hp: 65,
            attack: 100,
            defense: 70,
            spattack: 80,
            spdefense: 80,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}