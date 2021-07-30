const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 686
        this.pokemon = 'Inkay'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Malamar', 30),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picotazo'), 1],
            [move.get('restricción'), 1],
            [move.get('juego sucio'), 8],
            [move.get('psicoonda'), 13],
            [move.get('psicorrayo'), 21],
            [move.get('vendetta'), 27],
            [move.get('picoteo'), 35],
            [move.get('psicocorte'), 39],
            [move.get('cuchillada'), 43],
            [move.get('tajo umbrío'), 46],
            [move.get('fuerza bruta'), 48],
        ]
        this.stats = {
            hp: 53,
            attack: 54,
            defense: 53,
            spattack: 37,
            spdefense: 46,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}