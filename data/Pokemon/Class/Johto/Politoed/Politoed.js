const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 186
        this.pokemon = 'Politoed'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 33.9
        this.altura = 1.1
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('rayo burbuja'), 1],
            [move.get('pistola agua'), 1],
            [move.get('doble bofetón'), 1],
            [move.get('bote'), 37],
            [move.get('vozarrón'), 48],
        ]
        this.stats = {
            hp: 90,
            attack: 75,
            defense: 75,
            spattack: 90,
            spdefense: 100,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}