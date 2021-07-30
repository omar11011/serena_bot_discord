const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 132
        this.pokemon = 'Ditto'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 4
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Ditto,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 35
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
        ]
        this.stats = {
            hp: 48,
            attack: 48,
            defense: 48,
            spattack: 48,
            spdefense: 48,
            speed: 48,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}