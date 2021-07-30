const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Azafrán'
        this.lider = 'Sabrina'
        this.medalla = this.medal.get('Medalla Pantano')
        this.position = {
            x: 390,
            y: 227,
        }
        this.pokemon = [
            'Alakazam',
            'Metagross',
            'Espeon',
            'Exeggutor',
            'Sigilyph',
            'Slowking',
        ]
    }
}

module.exports = new Gym()