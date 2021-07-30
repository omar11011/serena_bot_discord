const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Alocada'
        this.spattack = 1.1
        this.spdefense = 0.9
    }
}

module.exports = new Naturaleza()