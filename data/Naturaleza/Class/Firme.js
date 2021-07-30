const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Firme'
        this.attack = 1.1
        this.spattack = 0.9
    }
}

module.exports = new Naturaleza()