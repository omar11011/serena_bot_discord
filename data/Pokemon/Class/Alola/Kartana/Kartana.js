const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 798
        this.pokemon = 'Kartana'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 0.1
        this.altura = 0.3
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
            [move.get('onda vacío'), 1],
            [move.get('aire afilado'), 1],
            [move.get('corte furia'), 1],
            [move.get('falsotortazo'), 7],
            [move.get('hoja afilada'), 13],
            [move.get('golpe aéreo'), 23],
            [move.get('tajo umbrío'), 31],
            [move.get('hoja aguda'), 43],
            [move.get('tijera x'), 47],
            [move.get('tajo aéreo'), 59],
            [move.get('espada santa'), 63],
            [move.get('psicocorte'), 67],
            [move.get('guillotina'), 73],
        ]
        this.stats = {
            hp: 59,
            attack: 181,
            defense: 131,
            spattack: 59,
            spdefense: 31,
            speed: 109,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}