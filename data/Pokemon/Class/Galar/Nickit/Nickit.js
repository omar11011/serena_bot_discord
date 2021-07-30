const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 827
        this.pokemon = 'Nickit'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 8.9
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Thievul', 18),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('paliza'), 4],
            [move.get('alarido'), 12],
            [move.get('buena baza'), 16],
            [move.get('golpe bajo'), 24],
            [move.get('tajo umbrío'), 28],
            [move.get('plumerazo'), 32],
            [move.get('juego sucio'), 36],
        ]
        this.stats = {
            hp: 40,
            attack: 28,
            defense: 28,
            spattack: 47,
            spdefense: 52,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}