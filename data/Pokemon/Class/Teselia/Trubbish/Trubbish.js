const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 568
        this.pokemon = 'Trubbish'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 31
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Garbodor', 36),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('bomba ácida'), 12],
            [move.get('doble bofetón'), 14],
            [move.get('residuos'), 18],
            [move.get('derribo'), 25],
            [move.get('bomba lodo'), 29],
            [move.get('niebla clara'), 34],
            [move.get('lanza mugre'), 45],
        ]
        this.stats = {
            hp: 50,
            attack: 50,
            defense: 62,
            spattack: 40,
            spdefense: 62,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}