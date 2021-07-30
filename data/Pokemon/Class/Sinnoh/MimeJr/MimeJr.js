const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 439
        this.pokemon = 'Mime Jr.'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 13
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Mr. Mime', 15),
        ]
        this.captura = 145
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('azote'), 5],
            [move.get('patada baja'), 8],
            [move.get('lanzarrocas'), 12],
            [move.get('atizar'), 15],
            [move.get('finta'), 19],
            [move.get('tumba rocas'), 26],
            [move.get('avalancha'), 33],
            [move.get('contraataque'), 36],
            [move.get('golpe bajo'), 40],
            [move.get('doble filo'), 43],
        ]
        this.stats = {
            hp: 50,
            attack: 80,
            defense: 95,
            spattack: 10,
            spdefense: 45,
            speed: 10,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}