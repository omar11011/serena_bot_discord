const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 43
        this.pokemon = 'Oddish'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5.4
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gloom', 21),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('ácido'), 9],
            [move.get('megaagotar'), 19],
            [move.get('gigadrenado'), 31],
            [move.get('don natural'), 39],
            [move.get('fuerza lunar'), 43],
            [move.get('danza pétalo'), 44],
            [move.get('rayo solar'), 46],
        ]
        this.stats = {
            hp: 45,
            attack: 50,
            defense: 55,
            spattack: 75,
            spdefense: 65,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}