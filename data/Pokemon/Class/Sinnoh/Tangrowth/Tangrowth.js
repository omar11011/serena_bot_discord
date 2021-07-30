const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 465
        this.pokemon = 'Tangrowth'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 128.6
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 30
        this.amistad = 50
        this.movimientos = [
            [move.get('restricción'), 1],
            [move.get('látigo cepa'), 7],
            [move.get('absorber'), 10],
            [move.get('atadura'), 17],
            [move.get('megaagotar'), 27],
            [move.get('desarme'), 27],
            [move.get('don natural'), 33],
            [move.get('gigadrenado'), 36],
            [move.get('poder pasado'), 40],
            [move.get('atizar'), 43],
            [move.get('estrujón'), 49],
            [move.get('latigazo'), 53],
        ]
        this.stats = {
            hp: 100,
            attack: 100,
            defense: 125,
            spattack: 110,
            spdefense: 50,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}