const Base = require('../Diglett').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Diglett de Alola'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1
        this.altura = 0.2
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dugtrio de Alola', 26),
        ]
        this.movimientos = [
            [move.get('garra metal'), 1],
            [move.get('impresionar'), 7],
            [move.get('bofetón lodo'), 10],
            [move.get('magnitud'), 14],
            [move.get('terratemblor'), 18],
            [move.get('golpe bajo'), 22],
            [move.get('bomba fango'), 25],
            [move.get('tierra viva'), 28],
            [move.get('excavar'), 31],
            [move.get('cabeza de hierro'), 35],
            [move.get('terremoto'), 39],
            [move.get('fisura'), 43],
        ]
        this.stats = {
            hp: 10,
            attack: 55,
            defense: 30,
            spattack: 35,
            spdefense: 45,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}