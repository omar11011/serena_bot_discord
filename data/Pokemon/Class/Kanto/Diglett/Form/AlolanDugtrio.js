const Base = require('../Dugtrio').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Dugtrio de Alola'
        this.region = Entidades.Region.Alola
        this.peso = 66.6
        this.altura = 0.7
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Acero,
        ]
        this.evolucion = []
        this.captura = 50
        this.movimientos = [
            [move.get('tajo umbrío'), 1],
            [move.get('triataque'), 1],
            [move.get('bucle arena'), 1],
            [move.get('garra metal'), 1],
            [move.get('impresionar'), 7],
            [move.get('bofetón lodo'), 10],
            [move.get('magnitud'), 14],
            [move.get('terratemblor'), 18],
            [move.get('golpe bajo'), 22],
            [move.get('bomba fango'), 25],
            [move.get('tierra viva'), 30],
            [move.get('excavar'), 35],
            [move.get('cabeza de hierro'), 41],
            [move.get('terremoto'), 47],
            [move.get('fisura'), 53],
        ]
        this.stats = {
            hp: 35,
            attack: 100,
            defense: 60,
            spattack: 50,
            spdefense: 70,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}