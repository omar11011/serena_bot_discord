const Base = require('./Shellder').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 91
        this.pokemon = 'Cloyster'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Hielo,
        ]
        this.peso = 132.5
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Cloyster', item.get('cloysterita')),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('carámbano'), 13],
            [move.get('clavo cañón'), 13],
            [move.get('tenaza'), 25],
            [move.get('canto helado'), 28],
            [move.get('concha filo'), 32],
            [move.get('rayo aurora'), 37],
            [move.get('torbellino'), 40],
            [move.get('salmuera'), 44],
            [move.get('chuzos'), 44],
            [move.get('rayo hielo'), 52],
            [move.get('hidrobomba'), 61],
        ]
        this.stats = {
            hp: 50,
            attack: 95,
            defense: 180,
            spattack: 85,
            spdefense: 45,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}