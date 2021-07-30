const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Comefuego Burt'
        this.pokemon = [
            'Weezing',
            'Magcargo',
        ]
    }

}

module.exports = new Personaje()