const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Fayenza'
        this.lider = 'Yakón'
        this.medalla = this.medal.get('Medalla Temblor')
        this.pokemon = [
            'Excadrill',
            'Flygon',
            'Krookodile',
            'Seismitoad',
            'Mamoswine',
            'Golurk',
        ]
    }
}

module.exports = new Gym()