const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Malvalona'
        this.lider = 'Erico'
        this.medalla = this.medal.get('Medalla Dínamo')
        this.pokemon = [
            'Manectric',
            'Magnezone',
            'Electrode',
            'Raichu',
            'Ampharos',
            'Jolteon',
        ]
    }
}

module.exports = new Gym()