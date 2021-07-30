const Base = require('./Huevo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Chocopi de Galar'
        this.region = Entidades.Region.Galar
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}