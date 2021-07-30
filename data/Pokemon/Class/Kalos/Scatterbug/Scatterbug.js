const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 664
        this.pokemon = 'Scatterbug'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 2.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Spewpa', 9),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picadura'), 15],
        ]
        this.stats = {
            hp: 38,
            attack: 35,
            defense: 40,
            spattack: 27,
            spdefense: 25,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}