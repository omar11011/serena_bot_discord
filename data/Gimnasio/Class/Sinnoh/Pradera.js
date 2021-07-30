const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Pradera'
        this.lider = 'Mananti'
        this.medalla = this.medal.get('Medalla Ciénaga')
        this.pokemon = [
            'Floatzel',
            'Empoleon',
            'Gyarados',
            'Vaporeon',
            'Poliwrath',
            'Swampert',
        ]
    }
}

module.exports = new Gym()