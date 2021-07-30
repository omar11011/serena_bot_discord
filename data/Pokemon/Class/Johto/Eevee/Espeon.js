const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 196
        this.pokemon = 'Espeon'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 26.5
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Espeon', item.get('espeonita')),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 13],
            [move.get('rapidez'), 17],
            [move.get('psicorrayo'), 20],
            [move.get('premonición'), 25],
            [move.get('psíquico'), 37],
            [move.get('última baza'), 41],
        ]
        this.stats = {
            hp: 65,
            attack: 65,
            defense: 60,
            spattack: 130,
            spdefense: 95,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}