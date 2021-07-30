const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 859
        this.pokemon = 'Impidimp'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 5.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Morgrem', 32),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('sorpresa'), 1],
            [move.get('mordisco'), 4],
            [move.get('buena baza'), 16],
            [move.get('golpe bajo'), 24],
            [move.get('pulso umbrío'), 33],
            [move.get('carantoña'), 40],
            [move.get('juego sucio'), 44],
        ]
        this.stats = {
            hp: 45,
            attack: 45,
            defense: 30,
            spattack: 55,
            spdefense: 40,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}