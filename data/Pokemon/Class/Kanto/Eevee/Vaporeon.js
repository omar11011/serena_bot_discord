const Base = require('./Eevee').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 134
        this.pokemon = 'Vaporeon'
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.peso = 29
        this.altura = 1
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Vaporeon', item.get('vaporeonsita')),
            new Entidades.Evolucion.Gigamax('Vaporeon Gigamax'),
        ]
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 13],
            [move.get('hidropulso'), 17],
            [move.get('rayo aurora'), 20],
            [move.get('agua lodosa'), 27],
            [move.get('última baza'), 41],
            [move.get('hidrobomba'), 45],
        ]
        this.stats = {
            hp: 130,
            attack: 65,
            defense: 60,
            spattack: 110,
            spdefense: 95,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}