const Base = require('../Ponyta').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Ponyta de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 24
        this.altura = 0.8
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Rapidash de Galar', 40),
        ]
        this.captura = 190
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 9],
            [move.get('viento feérico'), 15],
            [move.get('psicorrayo'), 25],
            [move.get('pisotón'), 30],
            [move.get('derribo'), 41],
            [move.get('brillo mágico'), 45],
            [move.get('psíquico'), 50],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}