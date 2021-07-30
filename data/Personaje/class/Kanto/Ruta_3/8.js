const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Dúo Pete y Pat'
        this.pokemon = [
            'Electabuzz',
            'Dugtrio',
        ]
    }

}

module.exports = new Personaje()