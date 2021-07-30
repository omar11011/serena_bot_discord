const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Montañero Dwight'
        this.pokemon = [
            'Magneton',
            'Steelix',
        ]
    }

}

module.exports = new Personaje()