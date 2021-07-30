const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 890
        this.pokemon = 'Eternatus'
        this.region = Entidades.Region.Galar
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 950
        this.altura = 20
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 255
        this.amistad = 0
        this.movimientos = [
            [move.get('cola veneno'), 1],
            [move.get('cola dragón'), 1],
            [move.get('carga tóxica'), 16],
            [move.get('veneno x'), 32],
            [move.get('pulso dragón'), 40],
            [move.get('lanzallamas'), 48],
            [move.get('cañón dinamax'), 56],
            [move.get('hiperrayo'), 80],
            [move.get('rayo infinito'), 88],
        ]
        this.stats = {
            hp: 140,
            attack: 85,
            defense: 95,
            spattack: 145,
            spdefense: 95,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}