const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Huraña'
        this.attack = 1.1
        this.defense = 0.9
    }
}

module.exports = new Naturaleza()