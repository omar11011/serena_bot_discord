const Base = require('../../Base')

class Gym extends Base {
    constructor() {
        super()

        this.nombre = 'Gimnasio de Ciudad Yantra'
        this.lider = 'Korrina'
        this.medalla = this.medal.get('Medalla Lid')
        this.pokemon = [
            'Lucario',
            'Machamp',
            'Hawlucha',
            'Mienshao',
            'Conkeldurr',
            'Poliwrath',
        ]
    }
}

module.exports = new Gym()