const Base = require('../../Base')
const db = require('../../../../server/models')

class Comida extends Base {
    constructor() {
        super()

        this.categoria = 'Comida'
        this.vendible = false
        // this.accesible = false

        this.exec = async object => {
            return { error: true, errorMessage: 'Los objetos de esta categoría se usan mediante el comando `food`.' }
        }
    }
}

module.exports = Comida