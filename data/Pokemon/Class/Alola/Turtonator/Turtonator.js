const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 776
        this.pokemon = 'Turtonator'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 212
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 70
        this.amistad = 50
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('placaje'), 1],
            [move.get('polución'), 5],
            [move.get('calcinación'), 13],
            [move.get('azote'), 17],
            [move.get('lanzallamas'), 29],
            [move.get('golpe cuerpo'), 33],
            [move.get('pulso dragón'), 41],
            [move.get('coraza trampa'), 45],
            [move.get('sofoco'), 49],
        ]
        this.stats = {
            hp: 60,
            attack: 78,
            defense: 135,
            spattack: 91,
            spdefense: 85,
            speed: 36,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}