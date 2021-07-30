const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 81
        this.pokemon = 'Magnemite'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Magneton', 30),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impactrueno'), 5],
            [move.get('bomba sónica'), 17],
            [move.get('chispa'), 19],
            [move.get('disparo espejo'), 23],
            [move.get('bola voltio'), 29],
            [move.get('foco resplandor'), 31],
            [move.get('bomba imán'), 33],
            [move.get('chispazo'), 37],
            [move.get('rapidez'), 38],
            [move.get('giro bola'), 47],
            [move.get('electrocañón'), 49],
        ]
        this.stats = {
            hp: 25,
            attack: 35,
            defense: 70,
            spattack: 95,
            spdefense: 55,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}