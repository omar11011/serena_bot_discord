const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 393
        this.pokemon = 'Piplup'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5.2
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Prinplup', 16),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('burbuja'), 8],
            [move.get('picotazo'), 15],
            [move.get('rayo burbuja'), 18],
            [move.get('ataque furia'), 25],
            [move.get('salmuera'), 29],
            [move.get('torbellino'), 32],
            [move.get('pico taladro'), 39],
            [move.get('hidrobomba'), 43],
        ]
        this.stats = {
            hp: 53,
            attack: 51,
            defense: 53,
            spattack: 61,
            spdefense: 56,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}