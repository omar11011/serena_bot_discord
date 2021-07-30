const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 761
        this.pokemon = 'Bounsweet'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 3.2
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Steenee', 18),
        ]
        this.captura = 235
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('gira rápido'), 9],
            [move.get('hoja afilada'), 13],
            [move.get('hoja mágica'), 21],
            [move.get('azote'), 29],
        ]
        this.stats = {
            hp: 42,
            attack: 30,
            defense: 38,
            spattack: 30,
            spdefense: 38,
            speed: 32,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}