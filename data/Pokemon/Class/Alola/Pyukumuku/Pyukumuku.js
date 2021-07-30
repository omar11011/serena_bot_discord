const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 771
        this.pokemon = 'Pyukumuku'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 1.2
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 60
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('contraataque'), 17],
        ]
        this.stats = {
            hp: 55,
            attack: 60,
            defense: 130,
            spattack: 30,
            spdefense: 130,
            speed: 5,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}