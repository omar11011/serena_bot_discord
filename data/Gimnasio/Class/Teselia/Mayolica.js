const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Mayólica'
        this.lider = 'Camila'
        this.medalla = this.medal.get('Medalla Voltio')
        this.pokemon = [
            'Zebstrika',
            'Ampharos',
            'Luxray',
            'Thundurus',
            'Eelektross',
            'Galvantula',
        ]
    }
}

module.exports = new Gym()