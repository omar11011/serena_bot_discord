const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 211
        this.pokemon = 'Qwilfish'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3.9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picotazo venenoso'), 1],
            [move.get('pistola agua'), 1],
            [move.get('burbuja'), 13],
            [move.get('desenrollar'), 17],
            [move.get('desquite'), 29],
            [move.get('salmuera'), 33],
            [move.get('pin misil'), 37],
            [move.get('derribo'), 41],
            [move.get('acua cola'), 45],
            [move.get('puya nociva'), 49],
            [move.get('hidrobomba'), 57],
            [move.get('aguijón letal'), 60],
        ]
        this.stats = {
            hp: 65,
            attack: 95,
            defense: 85,
            spattack: 55,
            spdefense: 55,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}