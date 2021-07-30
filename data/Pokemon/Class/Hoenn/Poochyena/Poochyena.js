const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 261
        this.pokemon = 'Poochyena'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 13.6
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Mightyena', 18),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 10],
            [move.get('buena baza'), 22],
            [move.get('triturar'), 34],
            [move.get('derribo'), 40],
            [move.get('golpe bajo'), 43],
            [move.get('carantoña'), 46],
        ]
        this.stats = {
            hp: 35,
            attack: 55,
            defense: 35,
            spattack: 30,
            spdefense: 30,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}