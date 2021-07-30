const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 412
        this.pokemon = 'Burmy'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3.4
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 120
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picadura'), 15],
            [move.get('poder oculto'), 20],
        ]
        this.stats = {
            hp: 40,
            attack: 29,
            defense: 45,
            spattack: 29,
            spdefense: 45,
            speed: 36,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}