const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 843
        this.pokemon = 'Silicobra'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 7.6
        this.altura = 2.2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Sandaconda', 36),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('constricción'), 1],
            [move.get('giro vil'), 10],
            [move.get('terratemblor'), 15],
            [move.get('golpe cabeza'), 20],
            [move.get('excavar'), 30],
            [move.get('atizar'), 40],
            [move.get('bucle arena'), 50],
        ]
        this.stats = {
            hp: 52,
            attack: 57,
            defense: 75,
            spattack: 35,
            spdefense: 50,
            speed: 46,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}