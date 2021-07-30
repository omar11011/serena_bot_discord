const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 810
        this.pokemon = 'Grookey'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Thwackey', 16),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('punzada rama'), 6],
            [move.get('hoja afilada'), 12],
            [move.get('desarme'), 20],
            [move.get('atizar'), 24],
            [move.get('alboroto'), 28],
            [move.get('mazazo'), 32],
            [move.get('esfuerzo'), 36],
        ]
        this.stats = {
            hp: 50,
            attack: 65,
            defense: 50,
            spattack: 40,
            spdefense: 40,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}