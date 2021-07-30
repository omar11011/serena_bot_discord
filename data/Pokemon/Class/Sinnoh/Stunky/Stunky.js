const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 434
        this.pokemon = 'Stunky'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 19.2
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Skuntank', 34),
        ]
        this.captura = 225
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('golpes furia'), 9],
            [move.get('amago'), 15],
            [move.get('bomba ácida'), 19],
            [move.get('mordisco'), 21],
            [move.get('cuchillada'), 25],
            [move.get('tajo umbrío'), 31],
            [move.get('golpe bajo'), 39],
            [move.get('eructo'), 43],
        ]
        this.stats = {
            hp: 63,
            attack: 63,
            defense: 47,
            spattack: 41,
            spdefense: 41,
            speed: 74,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}