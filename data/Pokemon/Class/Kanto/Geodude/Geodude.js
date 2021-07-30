const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 74
        this.pokemon = 'Geodude'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 20
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Graveler', 25),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 10],
            [move.get('magnitud'), 12],
            [move.get('lanzarrocas'), 16],
            [move.get('antiaéreo'), 18],
            [move.get('terratemblor'), 22],
            [move.get('pedrada'), 30],
            [move.get('terremoto'), 34],
            [move.get('doble filo'), 40],
            [move.get('roca afilada'), 42],
        ]
        this.stats = {
            hp: 40,
            attack: 80,
            defense: 100,
            spattack: 30,
            spdefense: 30,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}