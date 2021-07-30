const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 366
        this.pokemon = 'Clamperl'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 52.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Huntail', item.get('diente marino')),
            new Entidades.Evolucion.Intercambio('Gorebyss', item.get('escama marina')),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('tenaza'), 1],
            [move.get('torbellino'), 1],
            [move.get('pistola agua'), 1],
        ]
        this.stats = {
            hp: 35,
            attack: 64,
            defense: 85,
            spattack: 74,
            spdefense: 55,
            speed: 32,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}