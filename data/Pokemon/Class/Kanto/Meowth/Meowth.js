const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 52
        this.pokemon = 'Meowth'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 4.2
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Persian', 28),
            new Entidades.Evolucion.Gigamax('Meowth Gigamax'),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('mordisco'), 6],
            [move.get('sorpresa'), 9],
            [move.get('golpes furia'), 14],
            [move.get('finta'), 22],
            [move.get('día de pago'), 30],
            [move.get('cuchillada'), 33],
            [move.get('buena baza'), 41],
            [move.get('tajo umbrío'), 49],
            [move.get('amago'), 50],
        ]
        this.stats = {
            hp: 40,
            attack: 45,
            defense: 35,
            spattack: 40,
            spdefense: 40,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}