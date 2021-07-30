const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 387
        this.pokemon = 'Turtwig'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 10.2
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Grotle', 18),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('absorber'), 9],
            [move.get('hoja afilada'), 13],
            [move.get('mordisco'), 21],
            [move.get('megaagotar'), 25],
            [move.get('triturar'), 37],
            [move.get('gigadrenado'), 41],
            [move.get('lluevehojas'), 45],
        ]
        this.stats = {
            hp: 55,
            attack: 68,
            defense: 64,
            spattack: 45,
            spdefense: 55,
            speed: 31,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}