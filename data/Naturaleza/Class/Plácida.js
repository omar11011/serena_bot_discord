const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Plácida'
        this.defense = 1.1
        this.speed = 0.9
    }
}

module.exports = new Naturaleza()