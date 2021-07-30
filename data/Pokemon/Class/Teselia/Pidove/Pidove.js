const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 519
        this.pokemon = 'Pidove'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 2.1
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Tranquill', 21),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('ataque rápido'), 11],
            [move.get('aire afilado'), 15],
            [move.get('tajo aéreo'), 29],
            [move.get('viento cortante'), 32],
            [move.get('imagen'), 43],
            [move.get('tajo aéreo'), 50],
        ]
        this.stats = {
            hp: 50,
            attack: 55,
            defense: 50,
            spattack: 36,
            spdefense: 30,
            speed: 43,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}