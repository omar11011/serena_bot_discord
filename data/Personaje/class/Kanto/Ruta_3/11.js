const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Karateka Gabriel'
        this.pokemon = [
            'Primeape',
            'Graveler',
            'Machamp',
        ]
    }

}

module.exports = new Personaje()