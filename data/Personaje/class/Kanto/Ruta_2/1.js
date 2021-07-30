const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Cazabichos Elvis'
        this.pokemon = [
            'Beedrill',
            'Butterfree',
        ]
    }

}

module.exports = new Personaje()