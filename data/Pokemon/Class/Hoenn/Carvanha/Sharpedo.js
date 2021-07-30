const Base = require('./Carvanha').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 319
        this.pokemon = 'Sharpedo'
        this.peso = 88.8
        this.altura = 1.8
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Sharpedo', item.get('sharpedonita'))
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('amago'), 1],
            [move.get('furia'), 4],
            [move.get('acua jet'), 11],
            [move.get('buena baza'), 15],
            [move.get('colmillo hielo'), 25],
            [move.get('cuchillada'), 30],
            [move.get('colmillo veneno'), 34],
            [move.get('triturar'), 40],
            [move.get('cabezazo'), 51],
            [move.get('tajo umbrío'), 62],
        ]
        this.stats = {
            hp: 70,
            attack: 120,
            defense: 40,
            spattack: 95,
            spdefense: 40,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}