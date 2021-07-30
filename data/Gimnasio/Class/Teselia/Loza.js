const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Loza'
        this.lider = 'Gerania'
        this.medalla = this.medal.get('Medalla Jet')
        this.pokemon = [
            'Swanna',
            'Drifblim',
            'Archeops',
            'Mandibuzz',
            'Aerodactyl',
            'Braviary',
        ]
    }
}

module.exports = new Gym()