const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 590
        this.pokemon = 'Foongus'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Amoonguss', 39),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('impresionar'), 8],
            [move.get('megaagotar'), 15],
            [move.get('finta'), 20],
            [move.get('gigadrenado'), 28],
            [move.get('niebla clara'), 39],
            [move.get('rayo solar'), 43],
        ]
        this.stats = {
            hp: 69,
            attack: 55,
            defense: 45,
            spattack: 55,
            spdefense: 55,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}