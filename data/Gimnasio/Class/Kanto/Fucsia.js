const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Fucsia'
        this.lider = 'Koga'
        this.medalla = this.medal.get('Medalla Alma')
        this.pokemon = [
            'Skuntank',
            'Grimer',
            'Crobat',
            'Toxicroak',
            'Venomoth',
            'Swalot',
        ]
    }
}

module.exports = new Gym()