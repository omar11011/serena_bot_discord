const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 902
        this.pokemon = 'Sumbreon'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 15
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('persecución'), 6],
            [move.get('ataque rápido'), 12],
            [move.get('finta'), 18],
            [move.get('golpe cabeza'), 24],
            [move.get('buena baza'), 30],
            [move.get('bola sombra'), 36],
            [move.get('fuerza lunar'), 42],
            [move.get('última baza'), 48],
        ]
        this.stats = {
            hp: 85,
            attack: 95,
            defense: 110,
            spattack: 80,
            spdefense: 100,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}