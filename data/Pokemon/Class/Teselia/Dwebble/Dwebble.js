const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 557
        this.pokemon = 'Dwebble'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 14.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Crustle', 34),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('corte furia'), 1],
            [move.get('pedrada'), 5],
            [move.get('finta'), 13],
            [move.get('antiaéreo'), 17],
            [move.get('picadura'), 23],
            [move.get('avalancha'), 29],
            [move.get('cuchillada'), 31],
            [move.get('tijera x'), 35],
            [move.get('azote'), 41],
            [move.get('romperrocas'), 43],
        ]
        this.stats = {
            hp: 50,
            attack: 65,
            defense: 85,
            spattack: 35,
            spdefense: 35,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}