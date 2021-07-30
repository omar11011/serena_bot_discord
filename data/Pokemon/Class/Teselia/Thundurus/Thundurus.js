const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 642
        this.pokemon = 'Thundurus'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 61
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Thundurus Forma Totem'),
        ]
        this.captura = 3
        this.amistad = 90
        this.movimientos = [
            [move.get('alboroto'), 1],
            [move.get('impresionar'), 1],
            [move.get('impactrueno'), 1],
            [move.get('mordisco'), 7],
            [move.get('desquite'), 13],
            [move.get('onda voltio'), 19],
            [move.get('paranormal'), 25],
            [move.get('chispazo'), 37],
            [move.get('triturar'), 43],
            [move.get('trueno'), 61],
            [move.get('pulso umbrío'), 67],
            [move.get('machada'), 73],
            [move.get('golpe'), 79],
        ]
        this.stats = {
            hp: 79,
            attack: 115,
            defense: 70,
            spattack: 125,
            spdefense: 80,
            speed: 111,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}