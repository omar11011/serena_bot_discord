const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 532
        this.pokemon = 'Timburr'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 12.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gurdurr', 25),
        ]
        this.captura = 180
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('patada baja'), 12],
            [move.get('lanzarrocas'), 16],
            [move.get('espabila'), 20],
            [move.get('guardia baja'), 24],
            [move.get('avalancha'), 31],
            [move.get('puño dinámico'), 34],
            [move.get('machada'), 40],
            [move.get('roca afilada'), 43],
            [move.get('puño certero'), 46],
            [move.get('fuerza bruta'), 49],
        ]
        this.stats = {
            hp: 75,
            attack: 80,
            defense: 55,
            spattack: 25,
            spdefense: 35,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}