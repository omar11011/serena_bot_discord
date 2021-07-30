const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 343
        this.pokemon = 'Baltoy'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 21.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Claydol', 35),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('giro rápido'), 4],
            [move.get('bofetón lodo'), 7],
            [move.get('tumba rocas'), 10],
            [move.get('psicorrayo'), 13],
            [move.get('poder pasado'), 21],
            [move.get('paranormal'), 28],
            [move.get('tierra viva'), 37],
        ]
        this.stats = {
            hp: 40,
            attack: 40,
            defense: 55,
            spattack: 40,
            spdefense: 70,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}