const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 618
        this.pokemon = 'Stunfisk'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 11
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('bofetón lodo'), 1],
            [move.get('impactrueno'), 9],
            [move.get('disparo lodo'), 13],
            [move.get('bomba fango'), 21],
            [move.get('chispazo'), 25],
            [move.get('bote'), 35],
            [move.get('agua lodosa'), 40],
            [move.get('rayo'), 45],
            [move.get('desquite'), 50],
            [move.get('azote'), 55],
            [move.get('fisura'), 61],
        ]
        this.stats = {
            hp: 109,
            attack: 66,
            defense: 84,
            spattack: 81,
            spdefense: 99,
            speed: 32,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}