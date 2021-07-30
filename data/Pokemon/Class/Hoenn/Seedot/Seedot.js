const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 273
        this.pokemon = 'Seedot'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 4
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Nuzleaf', 14),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
        ]
        this.stats = {
            hp: 40,
            attack: 40,
            defense: 50,
            spattack: 30,
            spdefense: 30,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}