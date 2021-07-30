const Base = require('./Treecko').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 253
        this.pokemon = 'Grovyle'
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.peso = 21.6
        this.altura = 0.9
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Sceptile', 36),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('absorber'), 5],
            [move.get('ataque rápido'), 9],
            [move.get('megaagotar'), 13],
            [move.get('corte furia'), 16],
            [move.get('persecución'), 18],
            [move.get('hoja aguda'), 23],
            [move.get('atizar'), 33],
            [move.get('tijera x'), 43],
            [move.get('falsotortazo'), 48],
            [move.get('lluevehojas'), 53],
        ]
        this.stats = {
            hp: 50,
            attack: 65,
            defense: 45,
            spattack: 85,
            spdefense: 65,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}