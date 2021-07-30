const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Hokulani'
        this.lider = 'Sophocles'
        this.medalla = this.medal.get('Medalla Temple')
        this.pokemon = [
            'Raikou',
            'Togedemaru',
            'Vikavolt',
            'Luxray',
            'Electivire',
            'Jolteon',
        ]
    }
}

module.exports = new Gym()