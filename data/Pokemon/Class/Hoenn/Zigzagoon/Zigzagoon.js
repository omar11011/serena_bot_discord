const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 263
        this.pokemon = 'Zigzagoon'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 17.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Linoone', 20),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe cabeza'), 11],
            [move.get('pin misil'), 19],
            [move.get('antojo'), 23],
            [move.get('azote'), 29],
            [move.get('derribo'), 31],
            [move.get('lanzamiento'), 41],
        ]
        this.stats = {
            hp: 38,
            attack: 30,
            defense: 41,
            spattack: 30,
            spdefense: 41,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}