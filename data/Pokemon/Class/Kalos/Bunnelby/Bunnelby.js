const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 659
        this.pokemon = 'Bunnelby'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Diggersby', 20),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 7],
            [move.get('doble bofetón'), 10],
            [move.get('bofetón lodo'), 13],
            [move.get('derribo'), 15],
            [move.get('disparo lodo'), 18],
            [move.get('doble patada'), 20],
            [move.get('azote'), 29],
            [move.get('excavar'), 33],
            [move.get('bote'), 38],
            [move.get('super diente'), 42],
            [move.get('imagen'), 47],
            [move.get('terremoto'), 49],
        ]
        this.stats = {
            hp: 38,
            attack: 36,
            defense: 38,
            spattack: 32,
            spdefense: 36,
            speed: 57,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}