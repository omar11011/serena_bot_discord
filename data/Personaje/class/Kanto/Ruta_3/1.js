const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Chica'
        this.pokemon = [
            'Pidgey',
            'Pidgeotto',
            'Pidgeot',
        ]
    }

}

module.exports = new Personaje()