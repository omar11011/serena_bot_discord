const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 19
        this.pokemon = 'Rattata'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Raticate', 20),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 4],
            [move.get('mordisco'), 10],
            [move.get('persecución'), 13],
            [move.get('hiper colmillo'), 16],
            [move.get('triturar'), 22],
            [move.get('golpe bajo'), 25],
            [move.get('buena baza'), 25],
            [move.get('super diente'), 28],
            [move.get('doble filo'), 31],
        ]
        this.stats = {
            hp: 30,
            attack: 56,
            defense: 35,
            spattack: 25,
            spdefense: 35,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}