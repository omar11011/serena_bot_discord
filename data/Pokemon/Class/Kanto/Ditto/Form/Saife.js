const Base = require('../Ditto').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Ditto de Saife'
        this.region = Entidades.Region.Saife
        this.color = Entidades.Color.Verde
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}