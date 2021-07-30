const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 757
        this.pokemon = 'Salandit'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 4.8
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Salazzle', 33, true),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 5],
            [move.get('furia dragón'), 13],
            [move.get('polución'), 16],
            [move.get('doble bofetón'), 21],
            [move.get('pirotecnia'), 24],
            [move.get('carga tóxica'), 37],
            [move.get('lanzallamas'), 40],
            [move.get('pulso dragón'), 48],
        ]
        this.stats = {
            hp: 48,
            attack: 44,
            defense: 40,
            spattack: 71,
            spdefense: 40,
            speed: 77,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}