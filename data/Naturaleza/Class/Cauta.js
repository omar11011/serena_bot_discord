const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Cauta'
        this.spattack = 0.9
        this.spdefense = 1.1
    }
}

module.exports = new Naturaleza()