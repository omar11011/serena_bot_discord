const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Orquídea'
        this.lider = 'Aníbal'
        this.medalla = this.medal.get('Medalla Tormenta')
        this.pokemon = [
            'Poliwrath',
            'Machamp',
            'Hitmonchan',
            'Hitmontop',
            'Primeape',
            'Conkeldurr',
        ]
    }
}

module.exports = new Gym()