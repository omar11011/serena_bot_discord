const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 799
        this.pokemon = 'Guzzlord'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 888
        this.altura = 5.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 15
        this.amistad = 0
        this.movimientos = [
            [move.get('eructo'), 1],
            [move.get('furia dragón'), 1],
            [move.get('mordisco'), 1],
            [move.get('pisotón'), 7],
            [move.get('giro vil'), 13],
            [move.get('rodillo de púas'), 19],
            [move.get('cola dragón'), 23],
            [move.get('cola férrea'), 29],
            [move.get('pataleta'), 31],
            [move.get('triturar'), 37],
            [move.get('machada'), 43],
            [move.get('golpe'), 47],
            [move.get('cuerpo pesado'), 59],
            [move.get('estrujón'), 67],
            [move.get('carga dragón'), 73],
        ]
        this.stats = {
            hp: 223,
            attack: 101,
            defense: 53,
            spattack: 97,
            spdefense: 53,
            speed: 43,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}