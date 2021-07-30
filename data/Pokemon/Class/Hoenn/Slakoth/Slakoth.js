const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 287
        this.pokemon = 'Slakoth'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 24
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Vigoroth', 18),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('finta'), 14],
            [move.get('antojo'), 22],
            [move.get('guardia baja'), 25],
            [move.get('contraataque'), 30],
            [move.get('azote'), 33],
            [move.get('carantoña'), 38],
        ]
        this.stats = {
            hp: 60,
            attack: 60,
            defense: 60,
            spattack: 35,
            spdefense: 35,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}