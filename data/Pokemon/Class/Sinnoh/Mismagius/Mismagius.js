const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 429
        this.pokemon = 'Mismagius'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 4.4
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('llama embrujada'), 1],
            [move.get('joya de luz'), 1],
            [move.get('golpe fantasma'), 1],
            [move.get('hoja mágica'), 1],
            [move.get('psicoonda'), 1],
            [move.get('impresionar'), 1],
        ]
        this.stats = {
            hp: 60,
            attack: 60,
            defense: 60,
            spattack: 105,
            spdefense: 105,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}