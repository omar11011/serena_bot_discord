const Base = require('../Form/SaifeLopunny').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokemon = 'Mega Lopunny de Saife'
        this.peso = 22
        this.altura = 1.3
        this.evolucion = []
        this.stats = {
            hp: 65,
            attack: 146,
            defense: 104,
            spattack: 54,
            spdefense: 96,
            speed: 145,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}