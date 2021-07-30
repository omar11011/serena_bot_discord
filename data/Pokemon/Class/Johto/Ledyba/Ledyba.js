const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 165
        this.pokemon = 'Ledyba'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 10.8
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Ledian', 18),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('rapidez'), 8],
            [move.get('ultra puño'), 15],
            [move.get('viento plata'), 19],
            [move.get('puño cometa'), 22],
            [move.get('zumbido'), 33],
            [move.get('tajo aéreo'), 36],
            [move.get('doble filo'), 40],
        ]
        this.stats = {
            hp: 40,
            attack: 20,
            defense: 30,
            spattack: 40,
            spdefense: 80,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}