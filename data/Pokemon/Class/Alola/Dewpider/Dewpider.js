const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 751
        this.pokemon = 'Dewpider'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 4
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Araquanid', 22),
        ]
        this.captura = 200
        this.amistad = 50
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('acoso'), 5],
            [move.get('picadura'), 13],
            [move.get('rayo burbuja'), 16],
            [move.get('mordisco'), 21],
            [move.get('chupavidas'), 29],
            [move.get('triturar'), 32],
            [move.get('plancha'), 37],
            [move.get('manto espejo'), 40],
            [move.get('hidroariete'), 45],
        ]
        this.stats = {
            hp: 38,
            attack: 40,
            defense: 52,
            spattack: 40,
            spdefense: 72,
            speed: 27,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}