const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 228
        this.pokemon = 'Houndour'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 10.8
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Houndoom', 24),
        ]
        this.captura = 120
        this.amistad = 35
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('polución'), 8],
            [move.get('mordisco'), 16],
            [move.get('paliza'), 25],
            [move.get('colmillo ígneo'), 28],
            [move.get('finta'), 32],
            [move.get('juego sucio'), 40],
            [move.get('lanzallamas'), 44],
            [move.get('triturar'), 49],
            [move.get('infierno'), 56],
        ]
        this.stats = {
            hp: 45,
            attack: 60,
            defense: 30,
            spattack: 80,
            spdefense: 50,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}