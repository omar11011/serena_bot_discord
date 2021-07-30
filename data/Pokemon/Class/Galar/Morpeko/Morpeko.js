const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 877
        this.pokemon = 'Morpeko'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Morpeko Voraz'),
        ]
        this.captura = 180
        this.amistad = 50
        this.movimientos = [
            [move.get('impactrueno'), 1],
            [move.get('chulería'), 10],
            [move.get('ataque rápido'), 15],
            [move.get('mordisco'), 25],
            [move.get('chispa'), 30],
            [move.get('semilladora'), 45],
            [move.get('triturar'), 50],
            [move.get('rueda aural'), 55],
            [move.get('golpe'), 60],
        ]
        this.stats = {
            hp: 58,
            attack: 95,
            defense: 58,
            spattack: 70,
            spdefense: 58,
            speed: 97,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}