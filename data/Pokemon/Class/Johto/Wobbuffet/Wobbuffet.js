const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 202
        this.pokemon = 'Wobbuffet'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 28.5
        this.altura = 1.3
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('contraataque'), 1],
            [move.get('manto espejo'), 1],
        ]
        this.stats = {
            hp: 190,
            attack: 33,
            defense: 58,
            spattack: 33,
            spdefense: 58,
            speed: 33,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}