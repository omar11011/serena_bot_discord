const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 599
        this.pokemon = 'Klink'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 21
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Klang', 38),
        ]
        this.captura = 130
        this.amistad = 70
        this.movimientos = [
            [move.get('agarre'), 1],
            [move.get('impactrueno'), 11],
            [move.get('rueda doble'), 16],
            [move.get('atadura'), 21],
            [move.get('rayo carga'), 26],
            [move.get('disparo espejo'), 36],
            [move.get('chispazo'), 42],
            [move.get('electrocañón'), 54],
            [move.get('hiperrayo'), 57],
        ]
        this.stats = {
            hp: 40,
            attack: 55,
            defense: 70,
            spattack: 45,
            spdefense: 60,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}