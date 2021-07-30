const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Floja'
        this.defense = 1.1
        this.spdefense = 0.9
    }
}

module.exports = new Naturaleza()