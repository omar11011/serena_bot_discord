const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 462
        this.pokemon = 'Magnezone'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 180
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 30
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('triataque'), 1],
            [move.get('manto espejo'), 1],
            [move.get('impactrueno'), 5],
            [move.get('bomba imán'), 7],
            [move.get('bomba sónica'), 17],
            [move.get('chispa'), 19],
            [move.get('disparo espejo'), 23],
            [move.get('bola voltio'), 29],
            [move.get('foco resplandor'), 33],
            [move.get('chispazo'), 43],
            [move.get('giro bola'), 59],
            [move.get('electrocañón'), 63],
        ]
        this.stats = {
            hp: 70,
            attack: 70,
            defense: 115,
            spattack: 130,
            spdefense: 90,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}