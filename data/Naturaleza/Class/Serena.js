const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Serena'
        this.attack = 0.9
        this.spdefense = 1.1
    }
}

module.exports = new Naturaleza()