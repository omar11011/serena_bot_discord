const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 708
        this.pokemon = 'Phantump'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 7
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Trevenant'),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impresionar'), 5],
            [move.get('finta'), 19],
            [move.get('golpe fantasma'), 45],
            [move.get('mazazo'), 49],
            [move.get('asta drenaje'), 54],
        ]
        this.stats = {
            hp: 43,
            attack: 70,
            defense: 48,
            spattack: 50,
            spdefense: 60,
            speed: 38,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}