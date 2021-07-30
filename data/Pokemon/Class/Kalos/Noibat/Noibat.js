const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 714
        this.pokemon = 'Noibat'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Volador,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 8
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Noivern', 48),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('chupavidas'), 5],
            [move.get('tornado'), 11],
            [move.get('mordisco'), 13],
            [move.get('ataque ala'), 16],
            [move.get('aire afilado'), 23],
            [move.get('viento cortante'), 31],
            [move.get('super diente'), 43],
            [move.get('tajo aéreo'), 48],
            [move.get('vendaval'), 58],
        ]
        this.stats = {
            hp: 40,
            attack: 30,
            defense: 35,
            spattack: 45,
            spdefense: 40,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}