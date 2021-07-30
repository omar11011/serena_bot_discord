const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 835
        this.pokemon = 'Yamper'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 13.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Boltund', 25),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('moflete estático'), 5],
            [move.get('mordisco'), 10],
            [move.get('chispa'), 20],
            [move.get('triturar'), 30],
            [move.get('voltio cruel'), 40],
            [move.get('carantoña'), 45],
        ]
        this.stats = {
            hp: 59,
            attack: 45,
            defense: 50,
            spattack: 40,
            spdefense: 50,
            speed: 26,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}