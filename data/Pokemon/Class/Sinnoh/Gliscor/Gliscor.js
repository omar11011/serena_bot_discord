const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 472
        this.pokemon = 'Gliscor'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 42.5
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 30
        this.amistad = 70
        this.movimientos = [
            [move.get('puya nociva'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('desarme'), 10],
            [move.get('ataque rápido'), 13],
            [move.get('corte furia'), 16],
            [move.get('furia'), 19],
            [move.get('acróbata'), 22],
            [move.get('tajo umbrío'), 27],
            [move.get('tijera x'), 40],
            [move.get('gancho alto'), 45],
            [move.get('guillotina'), 55],
        ]
        this.stats = {
            hp: 75,
            attack: 95,
            defense: 125,
            spattack: 45,
            spdefense: 75,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}