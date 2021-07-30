const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Comefuego Blasco'
        this.pokemon = [
            'Magmar',
            'Weezing',
            'Magcargo',
        ]
    }

}

module.exports = new Personaje()