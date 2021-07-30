const Base = require('./Huevo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Chocopi de Johto'
        this.region = Entidades.Region.Johto
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}