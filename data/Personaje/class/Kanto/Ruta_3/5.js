const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Joven Jacobo'
        this.pokemon = [
            'Raticate',
            'Fearow',
            'Arbok',
        ]
    }

}

module.exports = new Personaje()