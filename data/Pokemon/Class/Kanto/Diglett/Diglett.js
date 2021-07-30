const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 50
        this.pokemon = 'Diglett'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 0.8
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dugtrio', 26),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('impresionar'), 7],
            [move.get('bofetón lodo'), 10],
            [move.get('magnitud'), 14],
            [move.get('terratemblor'), 18],
            [move.get('golpe bajo'), 22],
            [move.get('bomba fango'), 25],
            [move.get('tierra viva'), 28],
            [move.get('excavar'), 31],
            [move.get('cuchillada'), 35],
            [move.get('terremoto'), 39],
            [move.get('fisura'), 43],
        ]
        this.stats = {
            hp: 10,
            attack: 55,
            defense: 25,
            spattack: 35,
            spdefense: 45,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}