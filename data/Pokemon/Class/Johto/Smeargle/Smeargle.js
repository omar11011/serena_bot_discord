const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 235
        this.pokemon = 'Smeargle'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 58
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
        ]
        this.stats = {
            hp: 55,
            attack: 20,
            defense: 35,
            spattack: 20,
            spdefense: 45,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}