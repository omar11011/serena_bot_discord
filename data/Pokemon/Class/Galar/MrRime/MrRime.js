const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 866
        this.pokemon = 'Mr. Rime'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 58.2
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('giro rápido'), 1],
            [move.get('brillo mágico'), 1],
            [move.get('destructor'), 1],
            [move.get('canto helado'), 1],
            [move.get('confusión'), 12],
            [move.get('viento hielo'), 20],
            [move.get('doble patada'), 24],
            [move.get('psicorrayo'), 28],
            [move.get('manto espejo'), 36],
            [move.get('golpe bajo'), 40],
            [move.get('liofilización'), 44],
            [move.get('psíquico'), 48],
        ]
        this.stats = {
            hp: 80,
            attack: 85,
            defense: 75,
            spattack: 110,
            spdefense: 100,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}