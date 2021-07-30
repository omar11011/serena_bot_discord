const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Escolar Sancho'
        this.pokemon = [
            'Furret',
            'Pidgeotto',
        ]
    }

}

module.exports = new Personaje()