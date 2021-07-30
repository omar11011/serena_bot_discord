const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 772
        this.pokemon = 'Código Cero'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 120.5
        this.altura = 1.9
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Silvally'),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('furia'), 5],
            [move.get('persecución'), 10],
            [move.get('golpe aéreo'), 20],
            [move.get('garra brutal'), 25],
            [move.get('tijera x'), 35],
            [move.get('derribo'), 40],
            [move.get('cabeza de hierro'), 50],
            [move.get('doble golpe'), 55],
            [move.get('tajo aéreo'), 60],
            [move.get('castigo'), 65],
            [move.get('viento cortante'), 70],
            [move.get('triataque'), 75],
            [move.get('doble filo'), 80],
        ]
        this.stats = {
            hp: 95,
            attack: 95,
            defense: 95,
            spattack: 95,
            spdefense: 95,
            speed: 59,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}