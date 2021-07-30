const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 574
        this.pokemon = 'Gothita'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5.8
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gothorita', 32),
        ]
        this.captura = 200
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('confusión'), 3],
            [move.get('doble bofetón'), 14],
            [move.get('psicorrayo'), 16],
            [move.get('finta'), 24],
            [move.get('psicocarga'), 25],
            [move.get('premonición'), 31],
            [move.get('psíquico'), 37],
        ]
        this.stats = {
            hp: 45,
            attack: 30,
            defense: 50,
            spattack: 55,
            spdefense: 65,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}