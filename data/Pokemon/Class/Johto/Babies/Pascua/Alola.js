const Base = require('./Huevo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Chocopi de Alola'
        this.region = Entidades.Region.Alola
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}