const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Malva'
        this.lider = 'Pegaso'
        this.medalla = this.medal.get('Medalla Céfiro')
        this.pokemon = [
            'Pidgeot',
            'Crobat',
            'Aerodactyl',
            'Honchkrow',
            'Xatu',
            'Swellow',
        ]
    }
}

module.exports = new Gym()