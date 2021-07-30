const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 645
        this.pokemon = 'Landorus'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 68
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Landorus Forma Totem'),
        ]
        this.captura = 3
        this.amistad = 90
        this.movimientos = [
            [move.get('disparo lodo'), 1],
            [move.get('tumba rocas'), 1],
            [move.get('castigo'), 7],
            [move.get('terratemblor'), 13],
            [move.get('lanzarrocas'), 19],
            [move.get('paranormal'), 25],
            [move.get('tierra viva'), 37],
            [move.get('avalancha'), 43],
            [move.get('terremoto'), 49],
            [move.get('fisura'), 61],
            [move.get('roca afilada'), 67],
            [move.get('machada'), 73],
            [move.get('golpe'), 79],
        ]
        this.stats = {
            hp: 89,
            attack: 125,
            defense: 90,
            spattack: 115,
            spdefense: 80,
            speed: 101,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}