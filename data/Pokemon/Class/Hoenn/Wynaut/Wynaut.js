const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 360
        this.pokemon = 'Wynaut'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 14
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Wobbuffet', 15),
        ]
        this.captura = 125
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('contraataque'), 15],
            [move.get('manto espejo'), 15],
        ]
        this.stats = {
            hp: 95,
            attack: 23,
            defense: 48,
            spattack: 23,
            spdefense: 48,
            speed: 23,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}