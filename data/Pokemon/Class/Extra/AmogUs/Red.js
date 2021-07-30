const Base = require('./Base').class
const Entidades = require('../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Red Crewman'
        this.color = Entidades.Color.Rojo
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}