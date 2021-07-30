const Base = require('./Spearow').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 22
        this.pokemon = 'Fearow'
        this.peso = 38
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Fearow', item.get('fearowita')),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('picoteo'), 1],
            [move.get('ataque furia'), 11],
            [move.get('persecución'), 13],
            [move.get('golpe aéreo'), 17],
            [move.get('buena baza'), 23],
            [move.get('pico taladro'), 34],
            [move.get('taladradora'), 45],
        ]
        this.stats = {
            hp: 65,
            attack: 90,
            defense: 65,
            spattack: 61,
            spdefense: 61,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}