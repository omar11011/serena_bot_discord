const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Pirita'
        this.lider = 'Roco'
        this.medalla = this.medal.get('Medalla Lignito')
        this.pokemon = [
            'Rampardos',
            'Probopass',
            'Golem',
            'Crustle',
            'Archeops',
            'Relicanth',
        ]
    }
}

module.exports = new Gym()