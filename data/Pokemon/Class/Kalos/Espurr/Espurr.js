const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 677
        this.pokemon = 'Espurr'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Meowstic', 25),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('antojo'), 5],
            [move.get('confusión'), 9],
            [move.get('psicorrayo'), 17],
            [move.get('sorpresa'), 19],
            [move.get('voz cautivadora'), 22],
            [move.get('psicocarga'), 25],
        ]
        this.stats = {
            hp: 62,
            attack: 48,
            defense: 54,
            spattack: 63,
            spdefense: 60,
            speed: 68,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}