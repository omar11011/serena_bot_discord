const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 561
        this.pokemon = 'Sigilyph'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 14
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('psicoonda'), 8],
            [move.get('psicorrayo'), 18],
            [move.get('aire afilado'), 21],
            [move.get('sincorruido'), 31],
            [move.get('tajo aéreo'), 31],
            [move.get('psíquico'), 44],
            [move.get('ataque aéreo'), 50],
        ]
        this.stats = {
            hp: 72,
            attack: 58,
            defense: 80,
            spattack: 103,
            spdefense: 80,
            speed: 97,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}