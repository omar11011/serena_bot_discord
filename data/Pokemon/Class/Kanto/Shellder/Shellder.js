const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 90
        this.pokemon = 'Shellder'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 4
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Item('Cloyster', item.get('piedra agua')),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('carámbano'), 13],
            [move.get('tenaza'), 25],
            [move.get('canto helado'), 28],
            [move.get('concha filo'), 32],
            [move.get('rayo aurora'), 37],
            [move.get('torbellino'), 40],
            [move.get('salmuera'), 44],
            [move.get('rayo hielo'), 52],
            [move.get('hidrobomba'), 61],
        ]
        this.stats = {
            hp: 30,
            attack: 65,
            defense: 100,
            spattack: 45,
            spdefense: 25,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}