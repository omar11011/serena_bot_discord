const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 605
        this.pokemon = 'Elgyem'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Beheeyem', 42),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('psicorrayo'), 15],
            [move.get('golpe cabeza'), 18],
            [move.get('poder oculto'), 22],
            [move.get('cabezazo zen'), 32],
            [move.get('psíquico'), 39],
            [move.get('sincorruido'), 53],
        ]
        this.stats = {
            hp: 55,
            attack: 55,
            defense: 55,
            spattack: 85,
            spdefense: 55,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}