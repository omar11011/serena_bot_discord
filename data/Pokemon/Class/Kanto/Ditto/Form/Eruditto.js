const Base = require('./Saife').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.redeem = true
        this.pokemon = 'Eruditto'
        this.color = Entidades.Color.Amarillo
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}