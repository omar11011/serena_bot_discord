const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 111
        this.pokemon = 'Rhyhorn'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 115
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Rhydon', 42)
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('cornada'), 1],
            [move.get('ataque furia'), 5],
            [move.get('antiaéreo'), 13],
            [move.get('pisotón'), 17],
            [move.get('terratemblor'), 21],
            [move.get('guardia baja'), 25],
            [move.get('pedrada'), 29],
            [move.get('taladradora'), 33],
            [move.get('derribo'), 37],
            [move.get('roca afilada'), 41],
            [move.get('terremoto'), 45],
            [move.get('mega cuerno'), 49],
            [move.get('perforador'), 53],
        ]
        this.stats = {
            hp: 80,
            attack: 85,
            defense: 95,
            spattack: 30,
            spdefense: 30,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}