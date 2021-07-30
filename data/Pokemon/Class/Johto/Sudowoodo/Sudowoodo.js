const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 185
        this.pokemon = 'Sudowoodo'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 38
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 65
        this.amistad = 50
        this.movimientos = [
            [move.get('atizar'), 1],
            [move.get('mazazo'), 1],
            [move.get('azote'), 5],
            [move.get('patada baja'), 8],
            [move.get('lanzarrocas'), 12],
            [move.get('finta'), 19],
            [move.get('tumba rocas'), 26],
            [move.get('avalancha'), 33],
            [move.get('contraataque'), 36],
            [move.get('golpe bajo'), 40],
            [move.get('doble filo'), 43],
            [move.get('roca afilada'), 47],
            [move.get('machada'), 50],
            [move.get('testarazo'), 54],
        ]
        this.stats = {
            hp: 100,
            attack: 50,
            defense: 80,
            spattack: 60,
            spdefense: 80,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}