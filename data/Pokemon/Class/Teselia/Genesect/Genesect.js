const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 649
        this.pokemon = 'Genesect'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 82.5
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('aguijón letal'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('garra mettal'), 1],
            [move.get('corte furia'), 7],
            [move.get('nitrocarga'), 18],
            [move.get('bomba impan'), 22],
            [move.get('cuchillada'), 29],
            [move.get('doble rayo'), 40],
            [move.get('triataque'), 44],
            [move.get('tijera x'), 51],
            [move.get('zumbido'), 55],
            [move.get('electrocañón'), 66],
            [move.get('tecno shok'), 70],
            [move.get('hiperrayo'), 73],
        ]
        this.stats = {
            hp: 71,
            attack: 120,
            defense: 95,
            spattack: 120,
            spdefense: 95,
            speed: 99,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}