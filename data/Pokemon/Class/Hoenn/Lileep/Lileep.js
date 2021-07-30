const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 345
        this.pokemon = 'Lileep'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 23.8
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Cradily', 40),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('restricción'), 1],
            [move.get('ácido'), 8],
            [move.get('poder pasado'), 43],
            [move.get('energibola'), 50],
            [move.get('escupir'), 57],
            [move.get('estrujón'), 64],
        ]
        this.stats = {
            hp: 66,
            attack: 41,
            defense: 77,
            spattack: 61,
            spdefense: 87,
            speed: 23,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}