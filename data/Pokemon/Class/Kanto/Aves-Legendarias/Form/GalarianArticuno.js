const Base = require('../Articuno').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Articuno de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Volador,
        ]
        this.peso = 50.9
        this.altura = 1.7
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('confusión'), 5],
            [move.get('poder pasado'), 25],
            [move.get('psicocorte'), 35],
            [move.get('mirada heladora'), 45],
            [move.get('come sueños'), 50],
            [move.get('vendaval'), 55],
            [move.get('premonición'), 65],
        ]
        this.stats = {
            hp: 90,
            attack: 85,
            defense: 85,
            spattack: 125,
            spdefense: 100,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}