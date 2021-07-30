const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 744
        this.pokemon = 'Rockruff'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 9.2
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Lycanroc Diurno', 25),
            new Entidades.Evolucion.Nivel('Lycanroc Nocturno', 25),
            new Entidades.Evolucion.Nivel('Lycanroc Crepuscular', 25),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 7],
            [move.get('lanzarrocas'), 15],
            [move.get('tumba rocas'), 23],
            [move.get('avalancha'), 34],
            [move.get('triturar'), 40],
            [move.get('treparrocas'), 45],
            [move.get('roca afilada'), 48],
        ]
        this.stats = {
            hp: 45,
            attack: 65,
            defense: 40,
            spattack: 30,
            spdefense: 40,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}