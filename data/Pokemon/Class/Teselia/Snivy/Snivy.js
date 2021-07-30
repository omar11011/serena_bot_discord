const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 495
        this.pokemon = 'Snivy'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 8.1
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Servine', 17),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 7],
            [move.get('constricción'), 10],
            [move.get('ciclón de hojas'), 16],
            [move.get('megaagotar'), 22],
            [move.get('atizar'), 25],
            [move.get('hoja aguda'), 28],
            [move.get('gigadrenado'), 34],
            [move.get('estrujón'), 37],
            [move.get('lluevehojas'), 43],
        ]
        this.stats = {
            hp: 45,
            attack: 45,
            defense: 55,
            spattack: 45,
            spdefense: 55,
            speed: 63,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}