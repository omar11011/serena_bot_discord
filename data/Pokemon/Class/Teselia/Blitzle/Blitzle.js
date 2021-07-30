const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 522
        this.pokemon = 'Blitzle'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 29.8
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Zebstrika', 27),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('onda voltio'), 11],
            [move.get('nitrocarga'), 18],
            [move.get('persecución'), 22],
            [move.get('chispa'), 25],
            [move.get('pisotón'), 29],
            [move.get('chispazo'), 32],
            [move.get('voltio cruel'), 39],
            [move.get('golpe'), 43],
        ]
        this.stats = {
            hp: 45,
            attack: 60,
            defense: 32,
            spattack: 50,
            spdefense: 32,
            speed: 76,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}