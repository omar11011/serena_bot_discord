const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 901
        this.pokemon = 'Aereon'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Volador,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 27
        this.altura = 1.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('voz cautivadora'), 1],
            [move.get('acróbata'), 5],
            [move.get('ataque rápido'), 13],
            [move.get('mordisco'), 17],
            [move.get('golpe aéreo'), 20],
            [move.get('caída libre'), 25],
            [move.get('cháchara'), 33],
            [move.get('tajo aéreo'), 37],
            [move.get('última baza'), 41],
            [move.get('vuelo'), 45],
            [move.get('brillo mágico'), 48],
            [move.get('ataque aéreo'), 52],
        ]
        this.stats = {
            hp: 75,
            attack: 100,
            defense: 60,
            spattack: 135,
            spdefense: 70,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}