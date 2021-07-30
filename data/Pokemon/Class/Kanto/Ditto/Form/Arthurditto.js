const Base = require('./Saife').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.redeem = true
        this.pokemon = 'Arthurditto'
        this.color = Entidades.Color.Blanco
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}