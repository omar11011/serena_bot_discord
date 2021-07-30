const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 158
        this.pokemon = 'Totodile'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 9.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Croconaw', 18),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('pistola agua'), 6],
            [move.get('mordisco'), 13],
            [move.get('colmillo hielo'), 20],
            [move.get('azote'), 22],
            [move.get('triturar'), 27],
            [move.get('guardia baja'), 29],
            [move.get('cuchillada'), 34],
            [move.get('golpe'), 41],
            [move.get('acua cola'), 43],
            [move.get('fuerza bruta'), 48],
            [move.get('hidrobomba'), 50],
        ]
        this.stats = {
            hp: 50,
            attack: 65,
            defense: 44,
            spattack: 60,
            spdefense: 48,
            speed: 43,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}