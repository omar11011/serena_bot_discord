const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 455
        this.pokemon = 'Carnivine'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 27
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 200
        this.amistad = 70
        this.movimientos = [
            [move.get('atadura'), 1],
            [move.get('mordisco'), 7],
            [move.get('látigo cepa'), 11],
            [move.get('finta'), 27],
            [move.get('ciclón de hojas'), 31],
            [move.get('escupir'), 37],
            [move.get('triturar'), 41],
            [move.get('estrujón'), 47],
            [move.get('latigazo'), 50],
        ]
        this.stats = {
            hp: 74,
            attack: 100,
            defense: 72,
            spattack: 90,
            spdefense: 72,
            speed: 46,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}