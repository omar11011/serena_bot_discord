const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 613
        this.pokemon = 'Cubchoo'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 8.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Beartic', 37),
        ]
        this.captura = 120
        this.amistad = 70
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('viento hielo'), 13],
            [move.get('golpes furia'), 17],
            [move.get('salmuera'), 21],
            [move.get('cuchillada'), 33],
            [move.get('azote'), 36],
            [move.get('ventisca'), 45],
            [move.get('golpe'), 53],
            [move.get('frío polar'), 57],
        ]
        this.stats = {
            hp: 50,
            attack: 70,
            defense: 40,
            spattack: 60,
            spdefense: 40,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}