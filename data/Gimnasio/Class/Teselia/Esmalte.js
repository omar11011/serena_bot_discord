const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Esmalte'
        this.lider = 'Aloe'
        this.medalla = this.medal.get('Medalla Base')
        this.pokemon = [
            'Watchog',
            'Cinccino',
            'Braviary',
            'Kangaskhan',
            'Snorlax',
            'Lickilicky',
        ]
    }
}

module.exports = new Gym()