const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 128
        this.pokemon = 'Tauros'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 88.4
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('furia'), 1],
            [move.get('cornada'), 1],
            [move.get('persecución'), 1],
            [move.get('vendetta'), 1],
            [move.get('derribo'), 1],
            [move.get('cabezazo zen'), 1],
            [move.get('golpe'), 1],
            [move.get('doble filo'), 1],
            [move.get('giga impacto'), 1],
        ]
        this.stats = {
            hp: 75,
            attack: 100,
            defense: 95,
            spattack: 40,
            spdefense: 70,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}