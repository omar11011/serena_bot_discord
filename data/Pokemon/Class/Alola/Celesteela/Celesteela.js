const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 797
        this.pokemon = 'Celesteela'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 999.9
        this.altura = 9.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 25
        this.amistad = 0
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('absorber'), 1],
            [move.get('tajo aéreo'), 1],
            [move.get('antiaéreo'), 7],
            [move.get('megaagotar'), 13],
            [move.get('cabeza de hierro'), 29],
            [move.get('gigadrenado'), 31],
            [move.get('foco resplandor'), 37],
            [move.get('bomba germen'), 47],
            [move.get('cabezazo'), 53],
            [move.get('cuerpo pesado'), 67],
            [move.get('doble filo'), 73],
        ]
        this.stats = {
            hp: 97,
            attack: 101,
            defense: 103,
            spattack: 107,
            spdefense: 101,
            speed: 61,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}