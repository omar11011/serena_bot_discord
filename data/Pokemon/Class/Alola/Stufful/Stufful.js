const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 759
        this.pokemon = 'Stufful'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6.8
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Bewear', 27),
        ]
        this.captura = 140
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('giro vil'), 14],
            [move.get('azote'), 19],
            [move.get('vendetta'), 24],
            [move.get('derribo'), 28],
            [move.get('machada'), 32],
            [move.get('golpe'), 37],
            [move.get('doble filo'), 46],
            [move.get('fuerza bruta'), 50],
        ]
        this.stats = {
            hp: 70,
            attack: 75,
            defense: 50,
            spattack: 45,
            spdefense: 50,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}