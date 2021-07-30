const Base = require('./Grovyle').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 254
        this.pokemon = 'Sceptile'
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.peso = 52.2
        this.altura = 1.7
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Sceptile', item.get('sceptilita')),
        ]
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('tajo umbrío'), 1],
            [move.get('absorber'), 5],
            [move.get('ataque rápido'), 9],
            [move.get('megaagotar'), 13],
            [move.get('corte furia'), 16],
            [move.get('persecución'), 18],
            [move.get('hoja aguda'), 23],
            [move.get('atizar'), 33],
            [move.get('golpe bis'), 36],
            [move.get('tijera x'), 45],
            [move.get('falsotortazo'), 51],
            [move.get('lluevehojas'), 63],
        ]
        this.stats = {
            hp: 70,
            attack: 85,
            defense: 65,
            spattack: 105,
            spdefense: 85,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}