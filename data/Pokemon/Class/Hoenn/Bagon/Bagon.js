const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 371
        this.pokemon = 'Bagon'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 42.1
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Shelgon', 30),
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('furia'), 1],
            [move.get('ascuas'), 4],
            [move.get('mordisco'), 10],
            [move.get('dragoaliento'), 13],
            [move.get('golpe cabeza'), 17],
            [move.get('triturar'), 25],
            [move.get('garra dragón'), 29],
            [move.get('cabezazo zen'), 34],
            [move.get('lanzallamas'), 44],
            [move.get('doble filo'), 49],
        ]
        this.stats = {
            hp: 45,
            attack: 75,
            defense: 60,
            spattack: 40,
            spdefense: 30,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}