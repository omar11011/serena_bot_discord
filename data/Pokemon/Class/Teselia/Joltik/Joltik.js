const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 595
        this.pokemon = 'Joltik'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 0.6
        this.altura = 0.1
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Galvantula', 36),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('chupavidas'), 1],
            [move.get('corte furia'), 12],
            [move.get('electrotela'), 15],
            [move.get('picadura'), 18],
            [move.get('cuchillada'), 26],
            [move.get('bola voltio'), 29],
            [move.get('doble rayo'), 34],
            [move.get('golpe bajo'), 40],
            [move.get('chispazo'), 45],
            [move.get('zumbido'), 48],
        ]
        this.stats = {
            hp: 50,
            attack: 47,
            defense: 50,
            spattack: 57,
            spdefense: 50,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}