const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 746
        this.pokemon = 'Wishiwashi'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 0.3
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Wishiwashi Forma Banco', null, 70),
        ]
        this.captura = 60
        this.amistad = 50
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('finta'), 9],
            [move.get('salmuera'), 14],
            [move.get('derribo'), 25],
            [move.get('buceo'), 30],
            [move.get('paliza'), 33],
            [move.get('acua cola'), 38],
            [move.get('doble filo'), 41],
            [move.get('esfuerzo'), 49],
            [move.get('hidrobomba'), 54],
        ]
        this.stats = {
            hp: 45,
            attack: 20,
            defense: 20,
            spattack: 25,
            spdefense: 25,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}