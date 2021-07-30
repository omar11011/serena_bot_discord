const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Escolar Daniel'
        this.pokemon = [
            'Jynx',
            'Electabuzz',
            'Magmar',
        ]
    }

}

module.exports = new Personaje()