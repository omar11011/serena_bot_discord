const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Relieve'
        this.lider = 'Lino'
        this.medalla = this.medal.get('Medalla Muro')
        this.pokemon = [
            'Aurorus',
            'Tyrantrum',
            'Rhyperior',
            'Steelix',
            'Excadrill',
            'Rampardos',
        ]
    }
}

module.exports = new Gym()