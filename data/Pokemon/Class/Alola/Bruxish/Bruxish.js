const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 779
        this.pokemon = 'Bruxish'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 19
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 80
        this.amistad = 70
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('impresionar'), 4],
            [move.get('confusión'), 9],
            [move.get('mordisco'), 12],
            [move.get('acua jet'), 17],
            [move.get('psicoonda'), 25],
            [move.get('triturar'), 28],
            [move.get('acua cola'), 33],
            [move.get('psicocolmillo'), 41],
            [move.get('sincorruido'), 44],
        ]
        this.stats = {
            hp: 68,
            attack: 105,
            defense: 70,
            spattack: 70,
            spdefense: 70,
            speed: 92,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}