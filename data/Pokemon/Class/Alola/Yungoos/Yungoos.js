const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 734
        this.pokemon = 'Yungoos'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gumshoos', 20),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('persecución'), 7],
            [move.get('mordisco'), 19],
            [move.get('bofetón lodo'), 22],
            [move.get('super diente'), 25],
            [move.get('derribo'), 28],
            [move.get('triturar'), 34],
            [move.get('hiper colmillo'), 37],
            [move.get('golpe'), 43],
        ]
        this.stats = {
            hp: 40,
            attack: 70,
            defense: 30,
            spattack: 30,
            spdefense: 30,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}