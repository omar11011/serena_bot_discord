const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 4
        this.pokemon = 'Charmander'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 8.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo, 
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Charmeleon', 16),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 7],
            [move.get('garra metal'), 13],
            [move.get('furia dragón'), 17],
            [move.get('furia'), 19],
            [move.get('colmillo ígneo'), 25],
            [move.get('cuchillada'), 28],
            [move.get('pirotecnia'), 28],
            [move.get('lanzallamas'), 34],
            [move.get('giro fuego'), 43],
            [move.get('infierno'), 46],
        ]
        this.stats = {
            hp: 39,
            attack: 52,
            defense: 43,
            spattack: 60,
            spdefense: 50,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}