const Base = require('./Base').class
const Entidades = require('../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'White Crewman'
        this.color = Entidades.Color.Blanco
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}