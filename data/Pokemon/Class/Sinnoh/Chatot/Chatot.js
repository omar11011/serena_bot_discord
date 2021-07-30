const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 441
        this.pokemon = 'Chatot'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 1.9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 30
        this.amistad = 35
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('ataque furia'), 17],
            [move.get('cháchara'), 21],
            [move.get('canon'), 29],
            [move.get('eco voz'), 37],
            [move.get('alboroto'), 45],
            [move.get('sincorruido'), 49],
            [move.get('vozarrón'), 57],
        ]
        this.stats = {
            hp: 76,
            attack: 65,
            defense: 56,
            spattack: 92,
            spdefense: 42,
            speed: 91,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}