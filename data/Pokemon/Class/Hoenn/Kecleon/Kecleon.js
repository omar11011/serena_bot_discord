const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 352
        this.pokemon = 'Kecleon'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 22
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 200
        this.amistad = 70
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('lengüetazo'), 1],
            [move.get('arañazo'), 1],
            [move.get('atadura'), 1],
            [move.get('sombra vil'), 7],
            [move.get('amago'), 10],
            [move.get('golpes furia'), 13],
            [move.get('finta'), 16],
            [move.get('psicorrayo'), 18],
            [move.get('poder pasado'), 21],
            [move.get('cuchillada'), 25],
            [move.get('garra umbría'), 33],
            [move.get('golpe bajo'), 46],
            [move.get('sincorruido'), 50],
        ]
        this.stats = {
            hp: 60,
            attack: 90,
            defense: 70,
            spattack: 60,
            spdefense: 120,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}