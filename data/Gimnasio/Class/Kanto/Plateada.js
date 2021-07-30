const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Plateada'
        this.lider = 'Brook'
        this.medalla = this.medal.get('Medalla Roca')
        this.pokemon = [
            'Steelix',
            'Kabutops',
            'Relicanth',
            'Golem',
            'Omastar',
            'Aerodactyl',
        ]
    }
}

module.exports = new Gym()