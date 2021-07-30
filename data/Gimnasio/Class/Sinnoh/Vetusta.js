const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Vetusta'
        this.lider = 'Gardenia'
        this.medalla = this.medal.get('Medalla Bosque')
        this.pokemon = [
            'Roserade',
            'Tropius',
            'Leafeon',
            'Breloom',
            'Torterra',
            'Tangrowth',
        ]
    }
}

module.exports = new Gym()