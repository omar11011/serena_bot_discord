const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Joven'
        this.pokemon = [
            'Spearow',
            'Fearow',
            'Nidoqueen',
        ]
    }

}

module.exports = new Personaje()