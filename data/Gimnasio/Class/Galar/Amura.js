const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Amura'
        this.lider = 'Cathy'
        this.medalla = this.medal.get('Medalla Agua')
        this.pokemon = [
            'Golisopod',
            'Pelipper',
            'Drednaw',
            'Seaking',
            'Barraskewda',
            'Blastoise',
        ]
    }
}

module.exports = new Gym()