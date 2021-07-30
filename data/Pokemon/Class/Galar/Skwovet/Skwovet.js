const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 819
        this.pokemon = 'Skwovet'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 2.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Greedent', 24),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 5],
            [move.get('escupir'), 15],
            [move.get('golpe cuerpo'), 20],
            [move.get('contraataque'), 30],
            [move.get('semilladora'), 53],
            [move.get('super diente'), 40],
            [move.get('eructo'), 45],
        ]
        this.stats = {
            hp: 70,
            attack: 55,
            defense: 55,
            spattack: 35,
            spdefense: 35,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}