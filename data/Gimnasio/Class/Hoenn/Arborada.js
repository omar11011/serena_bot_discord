const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Arborada'
        this.lider = 'Alana'
        this.medalla = this.medal.get('Medalla Pluma')
        this.pokemon = [
            'Aereon',
            'Altaria',
            'Gyarados',
            'Skarmory',
            'Tropius',
            'Pidgeot',
        ]
    }
}

module.exports = new Gym()