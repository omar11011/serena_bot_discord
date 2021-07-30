const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Estudiante'
        this.pokemon = [
            'Spearow',
            'Fearow',
            'Nidoking',
        ]
    }

}

module.exports = new Personaje()