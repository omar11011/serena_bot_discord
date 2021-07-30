const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 315
        this.pokemon = 'Roselia'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólica
        this.peso = 2
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Item('Roserade', item.get('piedra día'))
        ]
        this.captura = 150
        this.amistad = 50
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('picotazo venenoso'), 7],
            [move.get('megaagotar'), 13],
            [move.get('hoja mágica'), 19],
            [move.get('gigadrenado'), 25],
            [move.get('tormenta floral'), 37],
            [move.get('danza pétalo'), 50],
        ]
        this.stats = {
            hp: 50,
            attack: 60,
            defense: 45,
            spattack: 100,
            spdefense: 80,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}