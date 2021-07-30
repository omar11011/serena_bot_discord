const Base = require('../Grimer').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Grimer de Alola'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 42
        this.altura = 0.7
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Muk de Alola', 38),
        ]
        this.captura = 190
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('mordisco'), 7],
            [move.get('bomba ácida'), 15],
            [move.get('colmillo veneno'), 18],
            [move.get('lanzamiento'), 26],
            [move.get('desarme'), 29],
            [move.get('triturar'), 32],
            [move.get('lanza mugre'), 40],
            [move.get('eructo'), 46],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}