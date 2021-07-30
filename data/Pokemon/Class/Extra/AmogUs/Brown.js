const Base = require('./Base').class
const Entidades = require('../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Brown Crewman'
        this.color = Entidades.Color.Marrón
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}