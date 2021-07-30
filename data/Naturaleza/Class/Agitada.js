const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Agitada'
        this.defense = 1.1
        this.spattack = 0.9
    }
}

module.exports = new Naturaleza()