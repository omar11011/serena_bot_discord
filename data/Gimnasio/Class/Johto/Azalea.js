const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Azalea'
        this.lider = 'Antón'
        this.medalla = this.medal.get('Medalla Colmena')
        this.pokemon = [
            'Scizor',
            'Shuckle',
            'Pinsir',
            'Heracross',
            'Yanmega',
            'Armaldo',
        ]
    }
}

module.exports = new Gym()