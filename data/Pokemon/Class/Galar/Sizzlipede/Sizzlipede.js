const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 850
        this.pokemon = 'Sizzlipede'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Centiskorch', 28),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('constricción'), 5],
            [move.get('mordisco'), 10],
            [move.get('rueda fuego'), 15],
            [move.get('picadura'), 20],
            [move.get('atizar'), 30],
            [move.get('giro fuego'), 35],
            [move.get('triturar'), 40],
            [move.get('látigo ígneo'), 45],
            [move.get('plancha'), 50],
            [move.get('llama final'), 55],
        ]
        this.stats = {
            hp: 50,
            attack: 65,
            defense: 45,
            spattack: 50,
            spdefense: 50,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}