const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Entrenador guay Cecilio'
        this.pokemon = [
            'Absol',
            'Alakazam',
        ]
    }

}

module.exports = new Personaje()