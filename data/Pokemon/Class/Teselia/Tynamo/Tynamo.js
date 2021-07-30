const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 602
        this.pokemon = 'Tynamo'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 0.3
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Eelektrik', 39),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('chispa'), 1],
            [move.get('rayo carga'), 1],
        ]
        this.stats = {
            hp: 35,
            attack: 55,
            defense: 40,
            spattack: 45,
            spdefense: 40,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}