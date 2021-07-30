const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 554
        this.pokemon = 'Darumaka'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 37.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Darmanitan', 35),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 3],
            [move.get('calcinación'), 6],
            [move.get('furia'), 9],
            [move.get('colmillo ígneo'), 11],
            [move.get('golpe cabeza'), 14],
            [move.get('alboroto'), 17],
            [move.get('imagen'), 19],
            [move.get('puño fuego'), 22],
            [move.get('golpe'), 27],
            [move.get('envite ígneo'), 33],
            [move.get('fuerza bruta'), 39],
            [move.get('sofoco'), 42],
        ]
        this.stats = {
            hp: 70,
            attack: 90,
            defense: 45,
            spattack: 15,
            spdefense: 45,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}