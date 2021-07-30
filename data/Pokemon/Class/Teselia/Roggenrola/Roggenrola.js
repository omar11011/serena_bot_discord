const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 524
        this.pokemon = 'Roggenrola'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 18
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Boldore', 25),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe cabeza'), 10],
            [move.get('pedrada'), 14],
            [move.get('bofetón lodo'), 17],
            [move.get('antiaéreo'), 23],
            [move.get('avalancha'), 27],
            [move.get('roca afilada'), 36],
        ]
        this.stats = {
            hp: 55,
            attack: 75,
            defense: 85,
            spattack: 25,
            spdefense: 25,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}