const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 833
        this.pokemon = 'Chewtle'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 8.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Drednaw', 22),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('mordisco'), 7],
            [move.get('golpe cabeza'), 21],
            [move.get('contraataque'), 28],
            [move.get('presa maxilar'), 35],
            [move.get('hidroariete'), 42],
            [move.get('golpe cuerpo'), 49],
        ]
        this.stats = {
            hp: 50,
            attack: 64,
            defense: 50,
            spattack: 38,
            spdefense: 38,
            speed: 44,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}