const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 501
        this.pokemon = 'Oshawott'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5.9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dewott', 17),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 7],
            [move.get('concha filo'), 17],
            [move.get('corte furia'), 19],
            [move.get('hidropulso'), 23],
            [move.get('desquite'), 25],
            [move.get('acua jet'), 29],
            [move.get('acua cola'), 35],
            [move.get('represalia'), 37],
            [move.get('hidrobomba'), 43],
        ]
        this.stats = {
            hp: 55,
            attack: 55,
            defense: 45,
            spattack: 63,
            spdefense: 45,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}