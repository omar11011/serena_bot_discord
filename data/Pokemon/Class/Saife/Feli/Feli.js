const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 899
        this.pokemon = 'Feli'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 100
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Ditto,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 255
        this.amistad = 140
        this.movimientos = [
            [move.get('arañazo'), 1],
        ]
        this.stats = {
            hp: 255,
            attack: 255,
            defense: 20,
            spattack: 20,
            spdefense: 20,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}