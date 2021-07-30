const Base = require('./Lampent').class
const Entidades = require('../../../../index')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 609
        this.pokemon = 'Chandelure'
        this.peso = 34.3
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Chandelure', item.get('chandelurita')),
        ]
        this.captura = 45
        this.stats = {
            hp: 60,
            attack: 55,
            defense: 90,
            spattack: 145,
            spdefense: 90,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}