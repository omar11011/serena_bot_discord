const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Konikoni'
        this.lider = 'Mallow'
        this.medalla = this.medal.get('Medalla Calma')
        this.pokemon = [
            'Tsareena',
            'Shaymin',
            'Drampa',
            'Flygon',
            'Leafeon',
            'Virizion',
        ]
    }
}

module.exports = new Gym()