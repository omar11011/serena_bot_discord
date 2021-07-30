const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 339
        this.pokemon = 'Barboach'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1.9
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Whiscash', 30),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('bofetón lodo'), 1],
            [move.get('pistola agua'), 9],
            [move.get('bomba fango'), 13],
            [move.get('hidropulso'), 17],
            [move.get('magnitud'), 20],
            [move.get('ronquido'), 25],
            [move.get('acua cola'), 28],
            [move.get('terremoto'), 32],
            [move.get('agua lodosa'), 35],
            [move.get('premonición'), 39],
            [move.get('fisura'), 44],
        ]
        this.stats = {
            hp: 50,
            attack: 48,
            defense: 43,
            spattack: 46,
            spdefense: 41,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}