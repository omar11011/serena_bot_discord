const Base = require('./Snover').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 460
        this.pokemon = 'Abomasnow'
        this.peso = 135.5
        this.altura = 2.2
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Abomasnow', item.get('abomasnowita')),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('puño hielo'), 1],
            [move.get('hoja afilada'), 5],
            [move.get('viento hielo'), 9],
            [move.get('canto helado'), 26],
            [move.get('mazazo'), 36],
            [move.get('ventisca'), 47],
            [move.get('frío polar'), 58],
        ]
        this.stats = {
            hp: 90,
            attack: 92,
            defense: 75,
            spattack: 92,
            spdefense: 85,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}