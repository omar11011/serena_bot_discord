const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Osada'
        this.attack = 0.9
        this.defense = 1.1
    }
}

module.exports = new Naturaleza()