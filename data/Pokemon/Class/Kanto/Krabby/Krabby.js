const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 98
        this.pokemon = 'Krabby'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Kingler', 28),
        ]
        this.captura = 225
        this.amistad = 70
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('agarre'), 5],
            [move.get('rayo burbuja'), 15],
            [move.get('disparo lodo'), 19],
            [move.get('garra metal'), 21],
            [move.get('pisotón'), 25],
            [move.get('guillotina'), 31],
            [move.get('atizar'), 35],
            [move.get('salmuera'), 39],
            [move.get('martillazo'), 41],
            [move.get('azote'), 45],
        ]
        this.stats = {
            hp: 30,
            attack: 105,
            defense: 90,
            spattack: 25,
            spdefense: 25,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}