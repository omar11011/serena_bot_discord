const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 456
        this.pokemon = 'Finneon'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 7
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Lumineon', 31),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('pistola agua'), 6],
            [move.get('tornado'), 17],
            [move.get('hidropulso'), 22],
            [move.get('torbellino'), 38],
            [move.get('bote'), 45],
            [move.get('viento plata'), 49],
        ]
        this.stats = {
            hp: 49,
            attack: 49,
            defense: 56,
            spattack: 49,
            spdefense: 61,
            speed: 66,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}