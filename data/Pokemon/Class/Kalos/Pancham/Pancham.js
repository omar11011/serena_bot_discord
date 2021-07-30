const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 674
        this.pokemon = 'Pancham'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 8
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Pangoro', 32),
        ]
        this.captura = 128
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('empujón'), 7],
            [move.get('golpe kárate'), 12],
            [move.get('puño cometa'), 15],
            [move.get('cuchillada'), 20],
            [move.get('llave giro'), 25],
            [move.get('tiro vital'), 27],
            [move.get('golpe cuerpo'), 33],
            [move.get('triturar'), 39],
            [move.get('gancho alto'), 48],
        ]
        this.stats = {
            hp: 67,
            attack: 82,
            defense: 62,
            spattack: 46,
            spdefense: 48,
            speed: 43,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}