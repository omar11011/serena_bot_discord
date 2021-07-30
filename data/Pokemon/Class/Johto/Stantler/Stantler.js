const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 234
        this.pokemon = 'Stantler'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 71.2
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impresionar'), 7],
            [move.get('pisotón'), 13],
            [move.get('derribo'), 21],
            [move.get('cabezazo zen'), 38],
            [move.get('patada salto'), 43],
        ]
        this.stats = {
            hp: 73,
            attack: 95,
            defense: 62,
            spattack: 85,
            spdefense: 65,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}