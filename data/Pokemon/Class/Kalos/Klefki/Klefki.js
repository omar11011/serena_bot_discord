const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 707
        this.pokemon = 'Klefki'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 3
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('viento feérico'), 5],
            [move.get('impresionar'), 8],
            [move.get('beso drenaje'), 18],
            [move.get('juego sucio'), 27],
            [move.get('disparo espejo'), 34],
            [move.get('carantoña'), 43],
        ]
        this.stats = {
            hp: 57,
            attack: 80,
            defense: 91,
            spattack: 80,
            spdefense: 87,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}