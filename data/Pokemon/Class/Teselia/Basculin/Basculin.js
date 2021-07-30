const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 550
        this.spawn = false
        this.pokemon = 'Basculin'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 18
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 25
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('alboroto'), 3],
            [move.get('golpe cabeza'), 5],
            [move.get('mordisco'), 7],
            [move.get('acua jet'), 9],
            [move.get('guardia baja'), 11],
            [move.get('derribo'), 14],
            [move.get('triturar'), 17],
            [move.get('acua cola'), 20],
            [move.get('deble filo'), 26],
            [move.get('azote'), 34],
            [move.get('golpe'), 42],
            [move.get('testarazo'), 46],
        ]
        this.stats = {
            hp: 70,
            attack: 92,
            defense: 65,
            spattack: 80,
            spdefense: 55,
            speed: 98,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}