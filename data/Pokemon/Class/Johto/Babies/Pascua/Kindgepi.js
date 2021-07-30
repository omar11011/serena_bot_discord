const Base = require('./Huevo').class

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Kindgepi'
        this.evolucion = []
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}