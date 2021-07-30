const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Marina'
        this.lider = 'Lectro'
        this.medalla = this.medal.get('Medalla Faro')
        this.pokemon = [
            'Electivire',
            'Luxray',
            'Raichu',
            'Jolteon',
            'Electrode',
            'Zebstrika',
        ]
    }
}

module.exports = new Gym()