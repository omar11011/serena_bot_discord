const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 793
        this.pokemon = 'Nihilego'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 55.5
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 45
        this.amistad = 0
        this.movimientos = [
            [move.get('ácido'), 1],
            [move.get('restricción'), 1],
            [move.get('destructor'), 1],
            [move.get('niebla clara'), 7],
            [move.get('psicoonda'), 13],
            [move.get('golpe cabeza'), 19],
            [move.get('carga tóxica'), 23],
            [move.get('joya de luz'), 37],
            [move.get('manto espejo'), 43],
            [move.get('bomba ácida'), 47],
            [move.get('testarazo'), 73],
        ]
        this.stats = {
            hp: 109,
            attack: 53,
            defense: 47,
            spattack: 127,
            spdefense: 131,
            speed: 103,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}