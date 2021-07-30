const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 169
        this.pokemon = 'Crobat'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 75
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 90
        this.amistad = 70
        this.movimientos = [
            [move.get('veneno x'), 1],
            [move.get('absorber'), 1],
            [move.get('impresionar'), 7],
            [move.get('mordisco'), 11],
            [move.get('ataque ala'), 13],
            [move.get('aire afilado'), 19],
            [move.get('rapidez'), 24],
            [move.get('colmillo veneno'), 27],
            [move.get('chupavidas'), 35],
            [move.get('carga tóxica'), 43],
            [move.get('tajo aéreo'), 48],
        ]
        this.stats = {
            hp: 85,
            attack: 90,
            defense: 80,
            spattack: 70,
            spdefense: 80,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}