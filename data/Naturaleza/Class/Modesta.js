const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Modesta'
        this.attack = 0.9
        this.spattack = 1.1
    }
}

module.exports = new Naturaleza()