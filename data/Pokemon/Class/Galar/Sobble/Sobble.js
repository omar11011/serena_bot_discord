const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 816
        this.pokemon = 'Sobble'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 4
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Drizzile', 16),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('pistola agua'), 6],
            [move.get('atadura'), 8],
            [move.get('hidropulso'), 12],
            [move.get('golpe bajo'), 20],
            [move.get('hidroariete'), 28],
        ]
        this.stats = {
            hp: 50,
            attack: 40,
            defense: 40,
            spattack: 70,
            spdefense: 40,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}