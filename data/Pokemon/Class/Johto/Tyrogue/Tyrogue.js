const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 236
        this.pokemon = 'Tyrogue'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 21
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Hitmonlee', 20),
            new Entidades.Evolucion.Nivel('Hitmonchan', 20),
            new Entidades.Evolucion.Nivel('Hitmontop', 20),
        ]
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('sorpresa'), 1],
        ]
        this.stats = {
            hp: 35,
            attack: 35,
            defense: 35,
            spattack: 35,
            spdefense: 35,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}