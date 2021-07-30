const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Porcelana'
        this.lider = 'Camus'
        this.medalla = this.medal.get('Medalla Elitro')
        this.pokemon = [
            'Leavanny',
            'Accelgor',
            'Vespiquen',
            'Crustle',
            'Heracross',
            'Durant',
        ]
    }
}

module.exports = new Gym()