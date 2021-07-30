const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 41
        this.pokemon = 'Zubat'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Veneno, 
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 7.5
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Golbat', 22),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('impresionar'), 7],
            [move.get('mordisco'), 11],
            [move.get('ataque ala'), 13],
            [move.get('aire afilado'), 19],
            [move.get('rapidez'), 23],
            [move.get('colmillo veneno'), 25],
            [move.get('chupavidas'), 31],
            [move.get('carga tóxica'), 37],
            [move.get('tajo aéreo'), 41],
        ]
        this.stats = {
            hp: 40,
            attack: 45,
            defense: 35,
            spattack: 30,
            spdefense: 40,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}