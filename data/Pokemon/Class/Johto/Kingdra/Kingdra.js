const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 230
        this.pokemon = 'Kingdra'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 152
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('pistola agua'), 13],
            [move.get('ciclón'), 17],
            [move.get('rayo burbuja'), 21],
            [move.get('salmuera'), 31],
            [move.get('pulso dragón'), 45],
            [move.get('hidrobomba'), 60],
        ]
        this.stats = {
            hp: 75,
            attack: 95,
            defense: 95,
            spattack: 95,
            spdefense: 95,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}