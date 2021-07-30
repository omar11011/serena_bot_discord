const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 54
        this.pokemon = 'Psyduck'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 19.6
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Golduck', 33),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('pistola agua'), 7],
            [move.get('confusión'), 10],
            [move.get('golpes furia'), 13],
            [move.get('hidropulso'), 16],
            [move.get('cabezazo zen'), 25],
            [move.get('acua cola'), 28],
            [move.get('hidrobomba'), 40],
        ]
        this.stats = {
            hp: 50,
            attack: 52,
            defense: 48,
            spattack: 65,
            spdefense: 50,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}