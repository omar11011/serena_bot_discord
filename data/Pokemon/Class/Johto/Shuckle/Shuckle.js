const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 213
        this.pokemon = 'Shuckle'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 20.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('restricción'), 1],
            [move.get('desenrollar'), 1],
            [move.get('constricción'), 9],
            [move.get('estoicismo'), 12],
            [move.get('lanzarrocas'), 23],
            [move.get('avalancha'), 38],
            [move.get('picadura'), 42],
            [move.get('roca afilada'), 49],
        ]
        this.stats = {
            hp: 20,
            attack: 10,
            defense: 230,
            spattack: 10,
            spdefense: 230,
            speed: 5,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}