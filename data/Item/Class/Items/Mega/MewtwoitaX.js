const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Mewtwoita X'
        this.precio = 150000
        this.emoji = '<:mewtwoita_x:744688324513497271>'
    }
}

module.exports = new Mega()