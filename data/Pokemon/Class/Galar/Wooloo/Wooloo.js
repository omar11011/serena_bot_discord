const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 831
        this.pokemon = 'Wooloo'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dubwool', 24),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('doble patada'), 16],
            [move.get('golpe cabeza'), 21],
            [move.get('derribo'), 25],
            [move.get('inversión'), 32],
            [move.get('doble filo'), 40],
        ]
        this.stats = {
            hp: 42,
            attack: 40,
            defense: 55,
            spattack: 40,
            spdefense: 45,
            speed: 48,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}