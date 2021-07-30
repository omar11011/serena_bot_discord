const Base = require('./Base').class
const Entidades = require('../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Pink Crewman'
        this.color = Entidades.Color.Rosa
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}