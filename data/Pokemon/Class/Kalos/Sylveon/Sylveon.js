const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 700
        this.pokemon = 'Sylveon'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 23.5
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Sylveon', item.get('sylveonita')),
            new Entidades.Evolucion.Gigamax('Sylveon Gigamax'),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('viento feérico'), 9],
            [move.get('ataque rápido'), 13],
            [move.get('rapidez'), 17],
            [move.get('beso drenaje'), 20],
            [move.get('fuerza lunar'), 37],
            [move.get('última baza'), 41],
        ]
        this.stats = {
            hp: 95,
            attack: 65,
            defense: 65,
            spattack: 110,
            spdefense: 130,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}