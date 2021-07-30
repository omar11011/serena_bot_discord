const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 109
        this.pokemon = 'Koffing'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Weezing', 35)
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('polución'), 4],
            [move.get('buena baza'), 12],
            [move.get('niebla clara'), 15],
            [move.get('residuos'), 18],
            [move.get('giro bola'), 29],
            [move.get('bomba lodo'), 34],
            [move.get('eructo'), 42],
        ]
        this.stats = {
            hp: 40,
            attack: 65,
            defense: 95,
            spattack: 60,
            spdefense: 45,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}