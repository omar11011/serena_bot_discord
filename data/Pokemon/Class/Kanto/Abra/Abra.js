const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 63
        this.pokemon = 'Abra'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 19.5
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Kadabra', 16),
        ]
        this.captura = 200
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('arañazo'), 6],
            [move.get('golpe cuerpo'), 10],
            [move.get('mega puño'), 14],
        ]
        this.stats = {
            hp: 25,
            attack: 20,
            defense: 15,
            spattack: 105,
            spdefense: 55,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}