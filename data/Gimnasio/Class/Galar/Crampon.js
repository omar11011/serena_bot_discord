const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Crampón'
        this.lider = 'Roxy'
        this.medalla = this.medal.get('Medalla Siniestro')
        this.pokemon = [
            'Liepard',
            'Scrafty',
            'Grimmsnarl',
            'Morpeko',
            'Toxicroak',
            'Darkrai',
        ]
    }
}

module.exports = new Gym()