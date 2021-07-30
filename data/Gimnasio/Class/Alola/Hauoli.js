const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Hauoli'
        this.lider = 'Ilima'
        this.medalla = this.medal.get('Medalla Libertad')
        this.pokemon = [
            'Sumbreon',
            'Aereon',
            'Vaporeon',
            'Komala',
            'Flareon',
            'Jolteon',
        ]
    }
}

module.exports = new Gym()