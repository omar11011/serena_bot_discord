const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Amable'
        this.defense = 0.9
        this.spdefense = 1.1
    }
}

module.exports = new Naturaleza()