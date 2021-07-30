const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Cazabichos Sam'
        this.pokemon = [
            'Beedrill',
            'Caterpie',
        ]
    }

}

module.exports = new Personaje()