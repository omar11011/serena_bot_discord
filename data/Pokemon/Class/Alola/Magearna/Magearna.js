const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 801
        this.pokemon = 'Magearna'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 80.5
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('cabeza de hierro'), 1],
            [move.get('bomba sónica'), 1],
            [move.get('psicorrayo'), 1],
            [move.get('rayo aurora'), 17],
            [move.get('disparo espejo'), 25],
            [move.get('foco resplandor'), 41],
            [move.get('cañón floral'), 49],
            [move.get('sincorruido'), 73],
            [move.get('esfera aural'), 81],
            [move.get('as oculto'), 97],
        ]
        this.stats = {
            hp: 80,
            attack: 95,
            defense: 115,
            spattack: 130,
            spdefense: 115,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}