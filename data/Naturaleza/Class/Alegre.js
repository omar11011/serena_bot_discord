const Base = require('../Base')

class Naturaleza extends Base {
    constructor() {
        super()
        
        this.nombre = 'Alegre'
        this.spattack = 0.9
        this.speed = 1.1
    }
}

module.exports = new Naturaleza()