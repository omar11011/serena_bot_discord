const Base = require('./Huevo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Chocopi de Kalos'
        this.region = Entidades.Region.Kalos
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}