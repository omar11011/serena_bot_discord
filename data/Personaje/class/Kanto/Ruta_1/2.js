const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Entrenadora guay Carla'
        this.pokemon = [
            'Ivysaur',
            'Starmie',
        ]
    }

}

module.exports = new Personaje()