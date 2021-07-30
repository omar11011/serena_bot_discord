const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 582
        this.pokemon = 'Vanillite'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 5.7
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Vanillish', 35),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('carámbano'), 1],
            [move.get('impresionar'), 7],
            [move.get('alboroto'), 10],
            [move.get('viento hielo'), 13],
            [move.get('alud'), 19],
            [move.get('disparo espejo'), 26],
            [move.get('rayo hielo'), 35],
            [move.get('manto espejo'), 44],
            [move.get('ventisca'), 49],
            [move.get('frío polar'), 53],
        ]
        this.stats = {
            hp: 36,
            attack: 50,
            defense: 50,
            spattack: 65,
            spdefense: 60,
            speed: 44,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}