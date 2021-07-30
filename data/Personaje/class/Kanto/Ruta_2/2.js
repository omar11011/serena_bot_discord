const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Cazabichos Rufo'
        this.pokemon = [
            'Ariados',
        ]
    }

}

module.exports = new Personaje()