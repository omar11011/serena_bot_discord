const Base = require('./Huevo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Chocopi de Sinnoh'
        this.region = Entidades.Region.Sinnoh
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}