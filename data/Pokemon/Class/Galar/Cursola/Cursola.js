const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 864
        this.pokemon = 'Cursola'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 0.4
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 30
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impresionar'), 1],
            [move.get('poder pasado'), 20],
            [move.get('infortunio'), 25],
            [move.get('joya de luz'), 40],
            [move.get('tinieblas'), 45],
            [move.get('manto espejo'), 55],
        ]
        this.stats = {
            hp: 60,
            attack: 95,
            defense: 50,
            spattack: 145,
            spdefense: 130,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}