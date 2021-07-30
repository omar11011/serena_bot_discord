const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 379
        this.pokemon = 'Registeel'
        this.region = Entidades.Region.Hoenn
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 205
        this.altura = 1.9
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('pisotón'), 1],
            [move.get('lanzarrocas'), 7],
            [move.get('rayo carga'), 13],
            [move.get('terratemblor'), 19],
            [move.get('poder pasado'), 31],
            [move.get('cabeza de hierro'), 43],
            [move.get('foco resplandor'), 43],
            [move.get('machada'), 49],
            [move.get('electrocañón'), 55],
            [move.get('fuerza bruta'), 61],
            [move.get('hiperrayo'), 67],
        ]
        this.stats = {
            hp: 80,
            attack: 75,
            defense: 150,
            spattack: 75,
            spdefense: 150,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}