const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Lavacalda'
        this.lider = 'Candela'
        this.medalla = this.medal.get('Medalla Calor')
        this.pokemon = [
            'Torkoal',
            'Camerupt',
            'Blaziken',
            'Houndoom',
            'Magmortar',
            'Chandelure',
        ]
    }
}

module.exports = new Gym()