const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 736
        this.pokemon = 'Grubbin'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 4.4
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Charjabug', 20),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('agarre'), 1],
            [move.get('bofetón lodo'), 7],
            [move.get('mordisco'), 10],
            [move.get('picadura'), 13],
            [move.get('chispa'), 16],
            [move.get('acróbata'), 19],
            [move.get('triturar'), 22],
            [move.get('tijera x'), 25],
            [move.get('excavar'), 28],
        ]
        this.stats = {
            hp: 47,
            attack: 62,
            defense: 45,
            spattack: 55,
            spdefense: 45,
            speed: 46,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}