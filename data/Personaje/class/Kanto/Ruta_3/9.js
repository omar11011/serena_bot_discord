const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Comefuego Otis'
        this.pokemon = [
            'Magmar',
            'Weezing',
            'Camerupt',
        ]
    }

}

module.exports = new Personaje()