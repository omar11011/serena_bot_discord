const Base = require('./Huevo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Chocopi de Hoenn'
        this.region = Entidades.Region.Hoenn
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}