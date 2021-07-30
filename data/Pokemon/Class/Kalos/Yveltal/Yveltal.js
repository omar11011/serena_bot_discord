const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 717
        this.pokemon = 'Yveltal'
        this.region = Entidades.Region.Kalos
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 203
        this.altura = 5.8
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Yveltal', item.get('yveltalita')),
        ]
        this.captura = 70
        this.amistad = 0
        this.movimientos = [
            [move.get('viento cortante'), 1],
            [move.get('tajo aéreo'), 10],
            [move.get('alarido'), 18],
            [move.get('ala mortífera'), 26],
            [move.get('pulso umbrío'), 44],
            [move.get('juego sucio'), 51],
            [move.get('golpe fantasma'), 55],
            [move.get('psíquico'), 59],
            [move.get('carga dragón'), 63],
            [move.get('onda certera'), 72],
            [move.get('golpe bajo'), 80],
            [move.get('hiperrayo'), 88],
            [move.get('ataque aéreo'), 93],
        ]
        this.stats = {
            hp: 126,
            attack: 131,
            defense: 95,
            spattack: 131,
            spdefense: 98,
            speed: 99,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}