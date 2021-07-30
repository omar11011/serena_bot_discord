const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 559
        this.pokemon = 'Scraggy'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 11.8
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Scrafty', 39),
        ]
        this.captura = 180
        this.amistad = 35
        this.movimientos = [
            [move.get('patada baja'), 1],
            [move.get('finta'), 9],
            [move.get('golpe cabeza'), 12],
            [move.get('demolición'), 20],
            [move.get('vendetta'), 23],
            [move.get('guardia baja'), 27],
            [move.get('patada salto alta'), 31],
            [move.get('triturar'), 38],
            [move.get('imagen'), 42],
            [move.get('treparrocas'), 45],
            [move.get('puño certero'), 49],
            [move.get('testarazo'), 53],
        ]
        this.stats = {
            hp: 50,
            attack: 75,
            defense: 70,
            spattack: 35,
            spdefense: 70,
            speed: 48,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}