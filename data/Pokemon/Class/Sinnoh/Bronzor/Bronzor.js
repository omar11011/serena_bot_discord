const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 436
        this.pokemon = 'Bronzor'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 60.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Bronzong', 33),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('confusión'), 1],
            [move.get('psicoonda'), 15],
            [move.get('finta'), 21],
            [move.get('premonición'), 29],
            [move.get('giro bola'), 35],
            [move.get('paranormal'), 39],
            [move.get('vendetta'), 41],
            [move.get('cuerpo pesado'), 49],
        ]
        this.stats = {
            hp: 57,
            attack: 24,
            defense: 86,
            spattack: 24,
            spdefense: 86,
            speed: 23,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}