const Base = require('./Duskull').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 356
        this.pokemon = 'Dusclops'
        this.peso = 30.6
        this.altura = 1.6
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Dusknoir', item.get('tela terrible')),
        ]
        this.captura = 90
        this.amistad = 35
        this.movimientos = [
            [move.get('tinieblas'), 1],
            [move.get('atadura'), 1],
            [move.get('puño trueno'), 1],
            [move.get('puño fuego'), 1],
            [move.get('puño hielo'), 1],
            [move.get('impresionar'), 9],
            [move.get('sombra vil'), 17],
            [move.get('persecución'), 22],
            [move.get('puño sombra'), 37],
            [move.get('infortunio'), 40],
            [move.get('bola sombra'), 45],
            [move.get('vendetta'), 57],
            [move.get('premonición'), 64],
        ]
        this.stats = {
            hp: 40,
            attack: 70,
            defense: 130,
            spattack: 60,
            spdefense: 130,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}