const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 884
        this.pokemon = 'Duraludon'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 40
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Duraludon Gigamax'),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('garra metal'), 1],
            [move.get('golpe roca'), 6],
            [move.get('vasto impacto'), 24],
            [move.get('cola dragón'), 30],
            [move.get('garra dragón'), 48],
            [move.get('foco resplandor'), 54],
            [move.get('represión metálica'), 60],
            [move.get('hiperrayo'), 66],
        ]
        this.stats = {
            hp: 70,
            attack: 95,
            defense: 115,
            spattack: 120,
            spdefense: 50,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}