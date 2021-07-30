const Base = require('./Huevo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Chocopi de Teselia'
        this.region = Entidades.Region.Teselia
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}