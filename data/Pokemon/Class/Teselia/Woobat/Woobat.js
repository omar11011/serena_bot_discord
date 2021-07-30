const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 527
        this.pokemon = 'Woobat'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 2.1
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Swoobat'),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('tornado'), 8],
            [move.get('buena baza'), 12],
            [move.get('arrumaco'), 15],
            [move.get('aire afilado'), 21],
            [move.get('tajo aéreo'), 32],
            [move.get('premonición'), 36],
            [move.get('psíquico'), 41],
            [move.get('esfuerzo'), 47],
        ]
        this.stats = {
            hp: 65,
            attack: 45,
            defense: 43,
            spattack: 55,
            spdefense: 43,
            speed: 72,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}