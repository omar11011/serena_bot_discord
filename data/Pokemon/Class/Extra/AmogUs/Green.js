const Base = require('./Base').class
const Entidades = require('../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Green Crewman'
        this.color = Entidades.Color.Verde
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}