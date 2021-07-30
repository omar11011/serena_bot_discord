const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 427
        this.pokemon = 'Buneary'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 5.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Lopunny'),
        ]
        this.captura = 190
        this.amistad = 140
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('frustración'), 1],
            [move.get('ataque rápido'), 16],
            [move.get('patada salto'), 23],
            [move.get('puño mareo'), 36],
            [move.get('bote'), 56],
        ]
        this.stats = {
            hp: 55,
            attack: 66,
            defense: 44,
            spattack: 44,
            spdefense: 56,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}