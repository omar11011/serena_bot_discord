const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 114
        this.pokemon = 'Tangela'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 35
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Movimiento('Tangrowth', move.get('poder pasado'))
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('restricción'), 1],
            [move.get('placaje'), 1],
            [move.get('confusión'), 10],
            [move.get('látigo cepa'), 15],
            [move.get('atadura'), 22],
            [move.get('megaagotar'), 23],
            [move.get('desarme'), 33],
            [move.get('poder pasado'), 36],
            [move.get('gigadrenado'), 36],
            [move.get('atizar'), 44],
            [move.get('estrujón'), 46],
            [move.get('latigazo'), 54],
        ]
        this.stats = {
            hp: 65,
            attack: 55,
            defense: 115,
            spattack: 100,
            spdefense: 40,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}