const Base = require('./Huevo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Chocopi de Kanto'
        this.region = Entidades.Region.Kanto
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}