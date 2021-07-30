const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Miedosa'
        this.attack = 0.9
        this.speed = 1.1
    }
}

module.exports = new Naturaleza()