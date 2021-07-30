const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Cazabichos'
        this.pokemon = [
            'Caterpie',
            'Metapod',
            'Butterfree',
            'Beedrill',
        ]
    }

}

module.exports = new Personaje()