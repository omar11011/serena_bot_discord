const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 408
        this.pokemon = 'Cranidos'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 31.5
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Rampardos', 30),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('golpe cabeza'), 1],
            [move.get('persecución'), 10],
            [move.get('derribo'), 15],
            [move.get('buena baza'), 24],
            [move.get('guardia baja'), 28],
            [move.get('poder pasado'), 33],
            [move.get('cabezazo zen'), 37],
            [move.get('testarazo'), 46],
        ]
        this.stats = {
            hp: 67,
            attack: 125,
            defense: 40,
            spattack: 30,
            spdefense: 30,
            speed: 58,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}