const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Joven Regis'
        this.pokemon = [
            'Golbat',
            'Electrode',
        ]
    }

}

module.exports = new Personaje()