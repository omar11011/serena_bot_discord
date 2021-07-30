const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 347
        this.pokemon = 'Anorith'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 12.5
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Armaldo', 40),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('pistola agua'), 7],
            [move.get('corte furia'), 10],
            [move.get('antiaéreo'), 13],
            [move.get('garra metal'), 17],
            [move.get('poder pasado'), 21],
            [move.get('picadura'), 25],
            [move.get('salmuera'), 29],
            [move.get('cuchillada'), 34],
            [move.get('garra brutal'), 39],
            [move.get('tijera x'), 44],
            [move.get('pedrada'), 55],
        ]
        this.stats = {
            hp: 45,
            attack: 95,
            defense: 50,
            spattack: 40,
            spdefense: 50,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}