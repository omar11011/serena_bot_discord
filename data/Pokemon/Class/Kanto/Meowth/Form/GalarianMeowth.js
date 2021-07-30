const Base = require('../Meowth').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Meowth de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Acero,
        ]
        this.peso = 7.5
        this.altura = 0.4
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Perrserker', 28),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('sorpresa'), 1],
            [move.get('placaje'), 1],
            [move.get('arañazo'), 8],
            [move.get('día de pago'), 12],
            [move.get('garra metal'), 16],
            [move.get('golpes furia'), 29],
            [move.get('cuchillada'), 36],
            [move.get('golpe'), 44],
        ]
        this.stats = {
            hp: 50,
            attack: 65,
            defense: 55,
            spattack: 40,
            spdefense: 40,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}