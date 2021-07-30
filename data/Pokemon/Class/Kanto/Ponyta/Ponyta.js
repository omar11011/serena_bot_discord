const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 77
        this.pokemon = 'Ponyta'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 30
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Rapidash', 40),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 9],
            [move.get('rueda fuego'), 13],
            [move.get('pisotón'), 17],
            [move.get('nitro carga'), 21],
            [move.get('giro fuego'), 25],
            [move.get('derribo'), 29],
            [move.get('infierno'), 33],
            [move.get('llamarada'), 41],
            [move.get('bote'), 45],
            [move.get('envite ígneo'), 49],
        ]
        this.stats = {
            hp: 50,
            attack: 85,
            defense: 55,
            spattack: 65,
            spdefense: 65,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}