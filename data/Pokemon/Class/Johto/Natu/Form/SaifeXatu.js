const Base = require('../Xatu').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Xatu de Saife'
        this.region = Entidades.Region.Saife
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}