const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 494
        this.pokemon = 'Victini'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 4
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 3
        this.amistad = 100
        this.movimientos = [
            [move.get('bomba ígnea'), 1],
            [move.get('confusión'), 1],
            [move.get('calcinación'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('golpe cabeza'), 17],
            [move.get('nitrocarga'), 25],
            [move.get('inversión'), 34],
            [move.get('pirotecnia'), 41],
            [move.get('cabezazo zen'), 49],
            [move.get('infierno'), 57],
            [move.get('doble filo'), 65],
            [move.get('envite ígneo'), 73],
            [move.get('poder reserva'), 89],
            [move.get('sofoco'), 97],
        ]
        this.stats = {
            hp: 100,
            attack: 100,
            defense: 100,
            spattack: 100,
            spdefense: 100,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}