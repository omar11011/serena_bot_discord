const Base = require('./Base')

class Personaje extends Base {
    
    constructor() {
        super()

        this.nombre = 'Montañero Enio'
        this.pokemon = [
            'Graveler',
            'Rhydon',
            'Clefairy',
        ]
    }

}

module.exports = new Personaje()