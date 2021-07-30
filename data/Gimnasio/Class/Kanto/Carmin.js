const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Carmín'
        this.lider = 'Teniente Surge'
        this.medalla = this.medal.get('Medalla Trueno')
        this.pokemon = [
            'Raichu',
            'Electrode',
            'Magnezone',
            'Jolteon',
            'Electivire',
            'Lanturn',
        ]
    }
}

module.exports = new Gym()