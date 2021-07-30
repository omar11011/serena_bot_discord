const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 632
        this.pokemon = 'Durant'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 33
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 90
        this.amistad = 50
        this.movimientos = [
            [move.get('agarre'), 1],
            [move.get('corte furia'), 1],
            [move.get('mordisco'), 1],
            [move.get('garra metal'), 11],
            [move.get('picadura'), 16],
            [move.get('triturar'), 21],
            [move.get('cabeza de hierro'), 26],
            [move.get('excavar'), 31],
            [move.get('tijera x'), 41],
            [move.get('guillotina'), 51],
        ]
        this.stats = {
            hp: 58,
            attack: 109,
            defense: 112,
            spattack: 48,
            spdefense: 48,
            speed: 109,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}