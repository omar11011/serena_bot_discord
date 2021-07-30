const Base = require('../Geodude').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Geodude de Alola'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Eléctrico,
        ]
        this.peso = 20.3
        this.altura = 0.8
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Graveler de Alola', 25),
        ]
        this.captura = 255
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 10],
            [move.get('chispa'), 12],
            [move.get('lanzarrocas'), 16],
            [move.get('antiaéreo'), 18],
            [move.get('puño trueno'), 22],
            [move.get('pedrada'), 30],
            [move.get('chispazo'), 34],
            [move.get('doble filo'), 40],
            [move.get('roca afilada'), 42],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}