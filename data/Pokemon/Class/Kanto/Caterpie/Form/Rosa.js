const Base = require('../Butterfree').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Butterfree Rosa'
        this.color = Entidades.Color.Rosa
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}